import AddTaskIcon from '@mui/icons-material/AddTask';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from '@mui/material';

function Dashboard() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <AddTaskIcon style={{ fontSize: '5em' }}></AddTaskIcon>
                <p>Collaborative Task Management Ltd</p>
            </aside>
            <nav>
                <header className="footer-title">Social links</header>
                <div className="grid grid-flow-col gap-4">
                    <Link href='https://twitter.com'><TwitterIcon style={{ fontSize: '4em' }} /></Link>
                    <Link href='https://youtube.com'> <YouTubeIcon style={{ fontSize: '4em' }} /></Link>
                    <Link href='https://facebook.com'><FacebookIcon style={{ fontSize: '4em' }} /></Link>
                </div>
            </nav>
        </footer>
    )
}

export default Dashboard