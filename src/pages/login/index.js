import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { LoginImage, StyledLink } from "./style";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Login = (props) => {
  const { setLoggedIn } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box flex={1} alignSelf="center">
        <LoginImage />
      </Box>
      <Box flex={1} alignSelf="center">
        <Box px={14}>
          <Paper>
            <Box textAlign="center" pt={2}>
              <Typography variant="h4">Login</Typography>
            </Box>
            <Box p={2}>
              <TextField
                variant="outlined"
                size="small"
                label="Usuário"
                fullWidth
              />
            </Box>
            <Box px={2} pb={2} textAlign="right">
              <TextField
                variant="outlined"
                size="small"
                label="Senha"
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <StyledLink>
                <Typography variant="caption">Esqueceu sua senha?</Typography>
              </StyledLink>
            </Box>
            <Box px={2} pb={2} display="flex">
              <Button variant="contained" color="primary" fullWidth>
                Criar conta
              </Button>
              <Box mx={1} />

              <StyledLink to="/">
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={() => setLoggedIn(true)}
                >
                  Logar
                </Button>
              </StyledLink>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Login;
