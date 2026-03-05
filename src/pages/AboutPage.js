import './AboutPage.css';

function AboutPage() {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'Frontend Developer', avatar: '👩‍💻' },
    { name: 'Bob Smith', role: 'Backend Developer', avatar: '👨‍💻' },
    { name: 'Carol Davis', role: 'UI/UX Designer', avatar: '🎨' },
  ];

  return (
    <div className="about-container">
      <h1>About ReactSite</h1>
      <p className="about-intro">
        ReactSite is a sample React JS application built to showcase routing, forms,
        and REST API integration. It uses React Router for navigation and demonstrates
        clean component architecture.
      </p>

      <section className="about-tech">
        <h2>Technologies Used</h2>
        <ul>
          <li>⚛️ React 19</li>
          <li>🔀 React Router v7</li>
          <li>🌐 Fetch API with JSONPlaceholder</li>
          <li>🎨 Custom CSS</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map(({ name, role, avatar }) => (
            <div key={name} className="team-card">
              <span className="team-avatar">{avatar}</span>
              <h3>{name}</h3>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
