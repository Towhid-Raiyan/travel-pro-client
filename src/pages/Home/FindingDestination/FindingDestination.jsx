import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const FindingDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useContext(AuthContext);

    const onSubmit = (data) => {
        fetch("https://server-college-selector-towhid-raiyan.vercel.app/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            mode: 'cors'
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire(
                    "Added!",
                    "Application Complete!!",
                    "success"
                );
                reset();
            });
        // console.log(data);
    };
    return (
        <div className="mt-5">
            <div>
                <Fade >
                    <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                        <div className="flex justify-around">
                            <div className="form-control">
                                <label className="label">
                                    {/* <span className="label-text">Destination</span> */}
                                </label>
                                <select
                                    className="input input-bordered w-80" name="destination"
                                >
                                    <option value="Turkey">Turkey</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Thailand">Thailand</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    {/* <span className="label-text">Travel Type</span> */}
                                </label>
                                <select
                                    className="input input-bordered w-80" name="travel-type"
                                >
                                    <option value="adventure">Adventure</option>
                                    <option value="city-tour">City Tour</option>
                                    <option value="hill-town">Hill Town</option>
                                </select>
                            </div>
                            <div className="form-control mt-2">
                                {/* The button to open modal */}
                                <label htmlFor="my_modal_6" className="btn btn-success text-white">Book Now</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <Form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-2xl mx-auto shadow-2xl bg-base-100 mb-6">
                                            <div className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Destination</span>
                                                    </label>
                                                    <select
                                                        className="input input-bordered" name="destination"
                                                        {...register("destination", { required: true })}
                                                    >
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Thailand">Thailand</option>
                                                    </select>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="name"
                                                        className="input input-bordered"
                                                        defaultValue={user?.displayName}
                                                        {...register("name", {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Email</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        className="input input-bordered"
                                                        defaultValue={user?.email}
                                                        {...register("email", {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Phone</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        placeholder="Phone Number"
                                                        className="input input-bordered"
                                                        {...register("phone", {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Date of Birth</span>
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="dob"
                                                        placeholder="Birth Date"
                                                        className="input input-bordered"
                                                        {...register("dob", {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                                <div className="form-control mt-2">
                                                    <input
                                                        className="btn bg-green-500 text-white hover:bg-teal-700"
                                                        type="submit"
                                                        value="Apply Now"
                                                    />
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default FindingDestination;