export const footerWrapper = {
  bg: "background",
  color: "text",
  px: 4,
  py: 4,
  borderTop: "1px dashed",
  borderColor: "muted",

  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)'
}

export const footerHeader = {
  color: "primary",
  fontSize: 2,
  fontWeight: "bold",
  borderBottom: "1px solid",
  borderBottomColor: "white",
}

export const linkWrapper = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  mt: 3,
}

export const footerLink = {
  color: "text",
  textDecoration: "none", 
  fontSize: 1,
  "&:hover": {
    textDecoration: "underline",
    color: "primary",
  }
}