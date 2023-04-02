import "./phoneTitleModel.css";

const PhoneTitleModel = () => {
  const title = ["A", "I", "E", "F"];
  const text = [
    "A",
    "u",
    "t",
    "o",
    "m",
    "a",
    "t",
    "i",
    "c",
    " ",
    "I",
    "n",
    "d",
    "u",
    "c",
    "t",
    "i",
    "o",
    "n",
    " ",
    "E",
    "l",
    "e",
    "c",
    "t",
    "r",
    "i",
    "c",
    " ",
    "F",
    "a",
    "n",
  ];

  let delay = 0;

  return (
    <div className="title_model_phone">
      <div>
        {title.map((item) => {
          delay += 300;
          return (
            <span
              className="title_text_phone"
              style={{
                animationDelay: delay + "ms",
                WebkitAnimationDelay: delay + "ms",
                MozAnimationDelay: delay + "ms",
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div>
        {text.map((item) => {
          if (item != " ") {
            delay += 50;
            return (
              <span
                className="title_content_phone"
                style={{
                  animationDelay: delay + "ms",
                  WebkitAnimationDelay: delay + "ms",
                  MozAnimationDelay: delay + "ms",
                }}
              >
                {item}
              </span>
            );
          } else {
            return (
              <span
                className="title_content_phone"
                style={{
                  animationDelay: delay + "ms",
                  WebkitAnimationDelay: delay + "ms",
                  MozAnimationDelay: delay + "ms",
                }}
              >
                &nbsp;
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};
export default PhoneTitleModel;
