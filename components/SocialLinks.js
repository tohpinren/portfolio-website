import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const SocialLinks = ({ className = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-2 text-gray-600 dark:text-gray-400 cursor-pointer' }) => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/tohpinren/',
      icon: AiFillLinkedin,
      hoverClass: 'hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200',
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/tohpinren',
      icon: AiFillGithub,
      hoverClass: 'hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200',
      label: 'GitHub'
    },
    {
      href: 'mailto:tohpinren@gmail.com',
      icon: AiFillMail,
      hoverClass: 'hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200',
      label: 'Email'
    }
  ];

  return (
    <div className={className}>
      {socialLinks.map(({ href, icon: Icon, hoverClass, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="touch-target"
        >
          <Icon className={hoverClass} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;