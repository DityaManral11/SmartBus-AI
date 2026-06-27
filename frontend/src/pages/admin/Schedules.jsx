import { useState } from "react";
import {
    Search,
    Plus,
    Eye,
    Pencil,
    Trash2,
    CalendarDays,
    Bus,
    UserCog,
    Clock,
} from "lucide-react";

export default function Schedules() {
    const [search, setSearch] = useState("");

    const schedules = [
        {
            id: 1,
            bus: "BUS-07",
            driver: "Rahul Sharma",
            route: "North Campus",
            departure: "08:00 AM",
            arrival: "08:45 AM",
            status: "Active",
        },
        {
            id: 2,
            bus: "BUS-03",
            driver: "Amit Kumar",
            route: "City Center",
            departure: "08:30 AM",
            arrival: "09:10 AM",
            status: "Active",
        },
        {
            id: 3,
            bus: "BUS-05",
            driver: "Vivek Singh",
            route: "South Colony",
            departure: "09:00 AM",
            arrival: "09:50 AM",
            status: "Inactive",
        },
        {
            id: 4,
            bus: "BUS-09",
            driver: "Rakesh Verma",
            route: "Engineering Block",
            departure: "07:45 AM",
            arrival: "08:20 AM",
            status: "Active",
        },
    ];

    const filteredSchedules = schedules.filter(
        (item) =>
            item.bus.toLowerCase().includes(search.toLowerCase()) ||
            item.driver.toLowerCase().includes(search.toLowerCase()) ||
            item.route.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                        <h1 className="text-4xl font-bold flex items-center gap-3">

                            <CalendarDays size={38} />

                            Schedules

                        </h1>

                        <p className="mt-2 text-blue-100">

                            Manage all bus schedules.

                        </p>

                    </div>

                    <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

                        <div className="flex items-center gap-2">

                            <Plus size={18} />

                            Add Schedule

                        </div>

                    </button>

                </div>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">

                    <CalendarDays size={34} />

                    <p className="mt-4">Total Schedules</p>

                    <h2 className="text-3xl font-bold mt-2">18</h2>

                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl">

                    <Bus size={34} />

                    <p className="mt-4">Running Today</p>

                    <h2 className="text-3xl font-bold mt-2">15</h2>

                </div>

                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-6 text-white shadow-xl">

                    <Clock size={34} />

                    <p className="mt-4">Completed</p>

                    <h2 className="text-3xl font-bold mt-2">3</h2>

                </div>

            </div>

            {/* Search */}

            <div className="bg-white rounded-3xl shadow-xl p-5">

                <div className="relative">

                    <Search
                        className="absolute left-4 top-4 text-gray-400"
                        size={20}
                    />

                    <input
                        type="text"
                        placeholder="Search schedule..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 py-4 border rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none"
                    />

                </div>

            </div>

            {/* Table */}

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-slate-100">

                            <tr>
                                <th className="text-left p-5">Bus</th>
                                <th className="text-left p-5">Driver</th>
                                <th className="text-left p-5">Route</th>
                                <th className="text-left p-5">Departure</th>
                                <th className="text-left p-5">Arrival</th>
                                <th className="text-left p-5">Status</th>
                                <th className="text-center p-5">Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredSchedules.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-slate-50 transition"
                                >

                                    <td className="p-5 font-semibold">{item.bus}</td>

                                    <td className="p-5">

                                        <div className="flex items-center gap-2">

                                            <UserCog size={16} />

                                            {item.driver}

                                        </div>

                                    </td>

                                    <td className="p-5">{item.route}</td>

                                    <td className="p-5">{item.departure}</td>

                                    <td className="p-5">{item.arrival}</td>

                                    <td className="p-5">

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${item.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>

                                    </td>

                                    <td className="p-5">

                                        <div className="flex justify-center gap-3">

                                            <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">

                                                <Eye size={18} />

                                            </button>

                                            <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition">

                                                <Pencil size={18} />

                                            </button>

                                            <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition">

                                                <Trash2 size={18} />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                            {filteredSchedules.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center py-10 text-gray-500"
                                    >
                                        No schedules found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}