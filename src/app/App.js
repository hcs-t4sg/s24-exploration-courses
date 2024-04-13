import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressPage from "@/components/progresspage";
import RefreshPage from './components/refreshpage'
import DownloadPage from './components/downloadpage'
import CrimsonCartPage from './components/crimsoncartpage'
import SettingsPage from './components/settingspage'

export default function App() {
    return (
        <>
            <div>
                <Router>
                    <Switch>
                        <Route path="/my-progress" element={<ProgressPage />} />
                        <Route path="/refresh" element={<RefreshPage />} />
                        <Route path="/download" element={<DownloadPage />} />
                        <Route path="/crimson-cash" element={<CrimsonCartPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Switch>
                </Router>
            </div>
        </>
    );
  }
  