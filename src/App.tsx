import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Register } from './pages/Register/Register'
import { WhatsConfirmation } from './pages/WhatsConfirmation/WhatsConfirmation'
import { LuckyNumber } from './pages/LuckyNumber/LuckyNumber'
import { Invites } from './pages/Invites/Invites'
import { Plans } from './pages/Plans/Plans'
import { Payment } from './pages/Payment/Payment'
import { PaymentConfirmation } from './pages/PaymentConfirmation/PaymentConfirmation'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/whats-confirmation" element={<WhatsConfirmation />} />
          <Route path="/lucky-number" element={<LuckyNumber />} />
          <Route path="/invites" element={<Invites />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/payment-confirmation"
            element={<PaymentConfirmation />}
          />
        </Routes>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
