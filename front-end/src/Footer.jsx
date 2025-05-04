import './assets/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Hadas Michaeli - All Rights Reserved</p>
        <p className="footer-note">
          לנוחותכם, פרטי הקשר זמינים באמצעות אייקונים לוואטסאפ ולטלפון בצד המסך.</p>
      </div>
    </footer>
  );
}

export default Footer;
