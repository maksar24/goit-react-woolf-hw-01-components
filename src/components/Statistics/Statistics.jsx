import {
  Item,
  Label,
  List,
  Percentage,
  StatisticsSection,
  Title,
} from './Statistics.styles';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </StatisticsSection>
  );
};

export default Statistics;
