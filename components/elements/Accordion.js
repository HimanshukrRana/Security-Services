/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

function Accordion() {
  const data = [
    {
      id: 1,
      Question: "What are the benefits a security guard gets?",
      Answer:
        "Apart from monthly salary, a guard usually gets PF, ESIC (insurance), yearly bonus, free uniform, etc.",
    },
    {
      id: 2,
      Question: " How to apply for security guard job?",
      Answer:
        "You can visit recruitment centre or office of security company with requirement documents. If you fulfil the criteria of physical fitness and educational qualification, you will be asked to fill the application form and accept terms and conditions. You many need to undergo training before you will be deployed at site. Once the training is completed, you will be issued ID and uniform along with a posting order. You can join the work as per the instruction in posting order.",
    },
    {
      id: 3,
      Question: "Is there any joining fee for security guard job?",
      Answer:
        "There is no joining fee for working as security guard. Although you may require to pay for initial set of uniform which cost anywhere between Rs. 1,000 to Rs. 2,000. This is one time payment and next pair of uniform is usually issued free of cost on completion of 6/12 months. Never pay any commission or fees for working as security guard to any agent or third party.",
    },
    {
      id: 4,
      Question:
        "Do I need to give any surety money or deposit at the time of joining?",
      Answer:
        "Yes, few agency demand surety money or deposit from the guards at the time of joining to safeguard their interest against any future contingency. It may be deducted from your first salary, if you are unable to pay at the time of joining. Such money is refundable when you complete exit formalities. Globe Security does not demand any such surety money from our security personnel.",
    },
    {
      id: 5,
      Question:
        "Is accommodation provided by security company or principal employer?",
      Answer:
        "If the site is located in a remote area then accommodation is usually provided. Accommodation may also be provided in the city depending upon the requirement. But, usually security guard arrange their own accommodation on sharing basis with other security guards.",
    },
    {
      id: 6,
      Question: "How to get a bodyguard job?",
      Answer:
        "If you have required physique, minimum height 5.10 feet, well built, fit and ability to tackle difficult situation, you can work as a bodyguard. You may directly take up a job with person in need of bodyguard like builder and celebrities. Globe Security provides bodyguard to many of its clients and hence you can apply with us. Send your resume at mail@security.co.in",
    },
    {
      id: 7,
      Question:
        "Can I get training from a third party before joining as security guard?",
      Answer:
        "Yes, there are many independent training institute which provide training to guard as per the PSARA and issue certificate. If you receive such training with a certificate, your job prosper with a good company improves significantly and you will get better post and salary too.",
    },
    {
      id: 8,
      Question: " How can I pay the payment of the services",
      Answer: "Online payment,Cash or Checks",
    },
  ];

  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <div className="section-box mt-100">
        <div className="container accordion" id="accordionFAQ">
          {data.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h2
                className="accordion-header"
                onClick={() => handleToggle(item.id)}
              >
                <button
                  className={
                    isActive.key === item.id
                      ? "accordion-button text-heading-5 "
                      : "accordion-button text-heading-5 collapsed"
                  }
                >
                  {item.Question}
                </button>
              </h2>
              <div
                className={
                  isActive.key === item.id
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse "
                }
              >
                <div className="accordion-body">{item.Answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="accordion" id="accordionFAQ">
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(1)}>
            <button
              className={
                isActive.key == 1
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              What are the benefits a security guard gets?
            </button>
          </h2>
          <div
            className={
              isActive.key == 1
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              Apart from monthly salary, a guard usually gets PF, ESIC
              (insurance), yearly bonus, free uniform, etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(2)}>
            <button
              className={
                isActive.key == 2
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              How to apply for security guard job?
            </button>
          </h2>
          <div
            className={
              isActive.key == 2
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              You can visit recruitment centre or office of security company
              with requirement documents. If you fulfil the criteria of physical
              fitness and educational qualification, you will be asked to fill
              the application form and accept terms and conditions. You many
              need to undergo training before you will be deployed at site. Once
              the training is completed, you will be issued ID and uniform along
              with a posting order. You can join the work as per the instruction
              in posting order.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(3)}>
            <button
              className={
                isActive.key == 3
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Is there any joining fee for security guard job?
            </button>
          </h2>
          <div
            className={
              isActive.key == 3
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              There is no joining fee for working as security guard. Although
              you may require to pay for initial set of uniform which cost
              anywhere between Rs. 1,000 to Rs. 2,000. This is one time payment
              and next pair of uniform is usually issued free of cost on
              completion of 6/12 months. Never pay any commission or fees for
              working as security guard to any agent or third party.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(4)}>
            <button
              className={
                isActive.key == 4
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Do I need to give any surety money or deposit at the time of
              joining?
            </button>
          </h2>
          <div
            className={
              isActive.key == 4
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              Yes, few agency demand surety money or deposit from the guards at
              the time of joining to safeguard their interest against any future
              contingency. It may be deducted from your first salary, if you are
              unable to pay at the time of joining. Such money is refundable
              when you complete exit formalities. Globe Security does not demand
              any such surety money from our security personnel.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(5)}>
            <button
              className={
                isActive.key == 5
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Is accommodation provided by security company or principal
              employer?
            </button>
          </h2>
          <div
            className={
              isActive.key == 5
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              If the site is located in a remote area then accommodation is
              usually provided. Accommodation may also be provided in the city
              depending upon the requirement. But, usually security guard
              arrange their own accommodation on sharing basis with other
              security guards.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(6)}>
            <button
              className={
                isActive.key == 6
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              How to get a bodyguard job?
            </button>
          </h2>
          <div
            className={
              isActive.key == 6
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              If you have required physique, minimum height 5.10 feet, well
              built, fit and ability to tackle difficult situation, you can work
              as a bodyguard. You may directly take up a job with person in need
              of bodyguard like builder and celebrities. Globe Security provides
              bodyguard to many of its clients and hence you can apply with us.
              Send your resume at mail@security.co.in
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(7)}>
            <button
              className={
                isActive.key == 7
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Can I get training from a third party before joining as security
              guard?
            </button>
          </h2>
          <div
            className={
              isActive.key == 7
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              Yes, there are many independent training institute which provide
              training to guard as per the PSARA and issue certificate. If you
              receive such training with a certificate, your job prosper with a
              good company improves significantly and you will get better post
              and salary too.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(8)}>
            <button
              className={
                isActive.key == 8
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              How can I pay the payment of the services
            </button>
          </h2>
          <div
            className={
              isActive.key == 8
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
          >
            <div className="accordion-body">
              <ul className="text-body-text">
                <li>Online payment</li>
                <li>Cash or Checks</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Accordion;
