import Image from "next/image";

export default function HomeTestimonials() {
    return (
        <section className="bg-black text-white px-6 md:px-20 py-16">
            <div className="grid md:grid-cols-2 items-center gap-12">
                {/* Left Side – Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#D5C299]">
                        Join 1,000+ Entrepreneurs Who’ve Launched With Us
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300">
                        <div>
                            <p className="text-[#D5C299]">★★★★★</p>
                            <p>{'"Very fast and smooth process." – '}<strong>Samir P.</strong></p>
                        </div>
                        <div>
                            <p className="text-[#D5C299]">★★★★★</p>
                            <p>{'"Got my license and visa in no time!" – '}<strong>Fatima N.</strong></p>
                        </div>
                        <div>
                            <p className="text-[#D5C299]">★★★★★</p>
                            <p>{'"Clear, simple, and helpful service." – '}<strong>Karan V.</strong></p>
                        </div>
                        <div>
                            <p className="text-[#D5C299]">★★★★★</p>
                            <p>{'"Made everything super easy for me." – '}<strong>Linda M.</strong></p>
                        </div>
                    </div>

                    <button className="mt-8 bg-[#D5C299] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                        FREE CONSULTATION
                    </button>
                </div>

                {/* Right Side – Image */}
                <div className="w-full h-80 md:h-[400px] relative rounded-xl overflow-hidden">
                    <Image
                        src="/image-entrepreneur.png" // Replace with your actual image path
                        alt="Entrepreneur success"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
