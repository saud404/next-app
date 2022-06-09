export default function Quote() {
    return (
        <div>
            <section class="relative pb-2">
                <div class="max-w-6xl px-4 mx-auto text-center sm:px-6">
                    <div class="py-5 md:py-30">
                        <h1 class="mb-5 text-5xl font-bold text-white">
                            Get a Quote!
                        </h1>
                        <div class="p-6">
                            <form>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="first-name">First name</label>
                                        <input type="text" id="first-name" name="name" class="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div class="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="last-name">Last name</label>
                                        <input type="text" id="last-name" name="last-name" class="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div class="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" class="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div class="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="organisation">Business size</label>
                                        <input type="text" id="last-name" name="last-name" class="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div class="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="services">Services</label>
                                        <input type="text" id="last-name" name="last-name" class="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div class="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="phone">
                                            <div class="flex justify-center">
                                                Phone
                                            </div>
                                        </label>
                                        <input type="tel" id="phone" name="phone" class="px-3 py-2 text-black rounded-md form-input" />
                                    </div>
                                    <div class="flex flex-col col-span-2 mb-5 text-3xl text-gray-100">
                                        <label htmlFor="subject">
                                            <div class="flex align-items">
                                                Additional Requests
                                                <span class="mb-2 ml-auto text-gray-100 opacity-75">Max. 500 characters</span>
                                            </div>
                                        </label>
                                        <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" class="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                </div>
                                <div class="flex justify-end ">
                                    <button type="submit" class="inline-flex items-center py-3 mt-2 ml-2 text-xl font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-white border rounded-lg px-14 hover:bg-yellow-300">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
