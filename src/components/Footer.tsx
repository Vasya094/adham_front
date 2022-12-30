import { Button } from "@mui/material"
import { Box } from "@mui/system"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import TelegramIcon from "@mui/icons-material/Telegram"

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <footer
      style={{
        boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)",
        color: "gray",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          m: 2,
        }}
      >
        <span style={{ alignSelf: "center" }}>
          © {currentDate} Adham Academy.
        </span>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button startIcon={<InstagramIcon />} href='/signin' />
          <Button startIcon={<WhatsAppIcon />} href='/signin' />
          <Button startIcon={<TelegramIcon />} href='/signin' />
          <Button startIcon={<FacebookIcon />} href='/signin' />
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
