import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@material-ui/core";
import { Button } from "@hasura-prototype/components";

const App = () => {
  const { data, loading } = useQuery(gql`
    query {
      Superheroes {
        id
        real_name
        superhero_name
      }
    }
  `);

  return (
    <Box className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        {loading
          ? "Loading..."
          : data.Superheroes.map(({ id, real_name, superhero_name }: any) => (
              <p key={id}>{`${real_name}: ${superhero_name}`}</p>
            ))}
      </header>
    </Box>
  );
};

export default App;
