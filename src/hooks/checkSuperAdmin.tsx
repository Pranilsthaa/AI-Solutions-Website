const CheckSuperAdmin = ({ children }) => {
  const tokenData = localStorage.getItem("token");
  const parsedToken = tokenData && JSON.parse(tokenData);
  const isSuperAdmin = parsedToken && parsedToken.role === "superadmin";
  return isSuperAdmin ? children : null;
};

export default CheckSuperAdmin;
