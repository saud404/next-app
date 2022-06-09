export default function Contact() {
  return (
    <div>
      <section class="text-gray-600">
        <div class="max-w-5xl pb-24 m-auto mx-auto pt-52">
          <h2 class="pt-3 mt-10 mb-10 text-6xl font-semibold text-white">
            Contact M-Open73
          </h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013.2705685913277!2d-0.3351534981348243!3d51.55732793347294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761301c319371b%3A0xf517031e60aaa55f!2s20%20Rosebank%20Ave%2C%20Wembley%20HA0%202TW%2C%20UK!5e0!3m2!1sen!2s!4v1652639206226!5m2!1sen!2s" width="1000" height="450" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <section class="relative pb-2">
          <div class="max-w-6xl px-4 mx-auto text-center sm:px-6">
            <div class="py-5 md:py-36">
              <h1 class="mb-5 text-6xl font-bold text-white">
                Contact Us
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
                          Message
                          <span class="mb-2 ml-auto text-gray-100 opacity-75">Max. 500 characters</span>
                        </div>
                      </label>
                      <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" class="px-3 py-2 text-black rounded-md form-input" required />
                    </div>
                  </div>
                  <div class="flex justify-end py-4">
                    <button type="submit" class="inline-flex items-center py-3 mt-2 ml-2 text-3xl font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-white border rounded-lg px-14 hover:bg-yellow-300">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section >
    </div>
  );
}
