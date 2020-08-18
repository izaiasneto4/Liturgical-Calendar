import React, { useEffect, useState } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../services/api';
import { Header, Container } from './styles';

interface CelebrationsProps {
  title: string;
  rank: string;
  colour: string;
}

interface DayDate {
  date: string;
  weekday: string;
  celebrations: CelebrationsProps[];
}
interface DayParams {
  month: string;
}

const Month: React.FC = () => {
  const [months, setMonth] = useState<DayDate[]>([]);
  const { params } = useRouteMatch<DayParams>();

  useEffect(() => {
    api.get(`/${params.month}`).then(response => {
      setMonth(response.data);
    });
  }, [params.month]);

  return (
    <>
      <Header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <IoMdReturnLeft size={30} />
          Voltar
        </Link>
      </Header>

      <Container>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weekday</th>
              <th>Title / Colour / Rank</th>
            </tr>
          </thead>
          {months.map(month => (
            <tbody key={month.date}>
              <tr>
                <td>{month.date}</td>
                <td>{month.weekday}</td>
                <td>
                  <ul>
                    {month.celebrations.map(teste => (
                      <li key={month.date}>
                        {teste.title} / {teste.colour} / {teste.rank}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Container>
    </>
  );
};

export default Month;
