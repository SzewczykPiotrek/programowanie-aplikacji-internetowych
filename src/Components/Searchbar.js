import TextField from "@mui/material/TextField";
import { InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  async function fetchRecipes() {
    const response = await fetch(
      // eslint-disable-next-line prettier/prettier
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=8b9d5c81&app_key=051e60c8a364e5fdf7ea16ccbc6a3a09`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextField
      label="Wyszukaj"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
