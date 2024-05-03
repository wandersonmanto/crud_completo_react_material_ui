import { ptBR as MaterialLocale } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import { DataGrid as DataGridLocale } from "@mui/x-data-grid";

export const theme = createTheme(
  {
    palette: {
      mode: "light",
    },
  },
  DataGridLocale,
  MaterialLocale
);
