import './styles.css';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as GithubIcon } from './github.svg';

function Footer(){
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/4lex" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.github.com/4lexRossi" target="_new">
          <GithubIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer;