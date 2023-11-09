
import Lottie from "react-lottie";
import animationData from "../../../public/lottie/register.json";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Form, Link } from "react-router-dom";

const Login = () => {

    const hangleEmailLogin = (event) => {
        // setStatus(null);
        // setError(null);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // loginWithEmail(email, password)
        //     .then((result) => {
        //         setError(null);
        //         setStatus("Sign In Successfull");
        //         setUser(result.user);
        //         navigate(from, { replace: true });
        //     })
        //     .catch((error) => {
        //         setError(error.message);
        //     });
        form.reset();
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center ">
                    <div className="text-center lg:text-left">
                        <div>
                            <h1 className="text-5xl font-bold text-teal-600 pt-7">
                                Login now!
                            </h1>
                            <div className="md:h-[600px] md:w-[600px]">
                                <Lottie options={defaultOptions} />
                            </div>
                        </div>
                    </div>
                    <Form
                        onSubmit={hangleEmailLogin}
                        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 "
                    >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="text-center">
                                {/* {status ? (
                                    <p className="text-teal-600">{status}</p>
                                ) : (
                                    <></>
                                )}
                                { ? (
                                    <p className="text-red-500">{error}</p>
                                ) : (
                                    <></>
                                )} */}
                            </div>
                            <div className="form-control mt-2">
                                <button
                                    className="btn bg-teal-600 text-white hover:bg-teal-700"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <button
                                    className="btn  bg-sky-500 mt-4 hover:bg-sky-600 border-none text-white"

                                >
                                    Login with Google
                                </button>
                            </div>
                            <p className="text-md text-center">

                                New here? Please{" "}
                                <Link
                                    to={"/register"}
                                    className="text-teal-600 font-semibold"
                                >
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;