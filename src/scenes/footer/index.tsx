import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className=" justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo aut
            nobis, veniam sed eius iure quod aperiam provident aspernatur
            voluptates nam magnam quam similique incidunt! Repellendus ducimus,
            animi quasi totam vitae voluptate, nobis adipisci itaque autem eius
            dolorum qui iure?
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illo!
          </p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
