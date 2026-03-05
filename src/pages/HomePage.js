import { Link } from 'react-router-dom';
import './HomePage.css';

const pages = [
  {
    to: '/about',
    title: 'About',
    description: 'Learn more about this project and the team behind it.',
    icon: '📖',
  },
  {
    to: '/dashboard',
    title: 'Dashboard',
    description: 'View live data fetched from a sample REST API.',
    icon: '📊',
  },
  {
    to: '/contact',
    title: 'Contact',
    description: 'Fill out the contact form to send us a message.',
    icon: '✉️',
  },
];

function HomePage() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Welcome to ReactSite</h1>
        <p>
          A simple React JS website demonstrating routing, forms, and API integration.
        </p>
      </section>

      <section className="home-cards">
        {pages.map(({ to, title, description, icon }) => (
          <Link key={to} to={to} className="home-card">
            <span className="home-card-icon">{icon}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
