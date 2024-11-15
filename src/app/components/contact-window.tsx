'use client';

interface Props {
  children?: React.ReactElement;
  className?: string;
  img?: string;
}

export function ContactWindow(props: Props) {
  const { children, className, img } = props;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-yellow-500 transform transition-transform duration-500 ease-in-out z-[9999] ${
        "translate-x-0"
      }`}
    >
      <div className="flex justify-center items-center h-full">
        <p className="text-white text-[30px]">Pantalla de Contacto</p>
      </div>
    </div>
  );
}

export default ContactWindow;
