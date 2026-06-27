import {
    FileText,
    Download,
    Printer,
    Eye,
    Trash2,
    Search,
    Plus,
} from "lucide-react";
import { useState } from "react";

export default function Reports() {
    const [search, setSearch] = useState("");

    const reports = [
        {
            id: 1,
            name: "Student Report",
            type: "PDF",
            date: "25 Jun 2025",
            status: "Ready",
        },
        {
            id: 2,
            name: "Driver Report",
            type: "Excel",
            date: "24 Jun 2025",
            status: "Ready",
        },
        {
            id: 3,
            name: "Bus Report",
            type: "PDF",
            date: "23 Jun 2025",
            status: "Pending",
        },
        {
            id: 4,
            name: "Route Report",
            type: "Excel",
            date: "22 Jun 2025",
            status: "Ready",
        },
    ];

    const filteredReports = reports.filter((report) =>
        report.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">

                <div className="flex justify-between items-center flex-wrap gap-4">

                    <div>

                        <h1 className="text-4xl font-bold flex items-center gap-3">

                            <FileText size={40} />

                            Reports

                        </h1>

                        <p className="text-blue-100 mt-2">

                            Generate and manage system reports.

                        </p>

                    </div>

                    <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

                        <div className="flex items-center gap-2">

                            <Plus size={18} />

                            Generate Report

                        </div>

                    </button>

                </div>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-4 gap-6">

                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white">

                    <FileText size={34} />

                    <p className="mt-4">Total Reports</p>

                    <h2 className="text-3xl font-bold mt-2">48</h2>

                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white">

                    <Download size={34} />

                    <p className="mt-4">Downloads</p>

                    <h2 className="text-3xl font-bold mt-2">320</h2>

                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 text-white">

                    <Printer size={34} />

                    <p className="mt-4">Printed</p>

                    <h2 className="text-3xl font-bold mt-2">95</h2>

                </div>

                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-6 text-white">

                    <FileText size={34} />

                    <p className="mt-4">Pending</p>

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
                        placeholder="Search Report..."
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

                                <th className="text-left p-5">Report</th>
                                <th className="text-left p-5">Type</th>
                                <th className="text-left p-5">Date</th>
                                <th className="text-left p-5">Status</th>
                                <th className="text-center p-5">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredReports.map((report) => (

                                <tr
                                    key={report.id}
                                    className="border-t hover:bg-slate-50 transition"
                                >

                                    <td className="p-5 font-semibold">
                                        {report.name}
                                    </td>

                                    <td className="p-5">
                                        {report.type}
                                    </td>

                                    <td className="p-5">
                                        {report.date}
                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${report.status === "Ready"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {report.status}
                                        </span>

                                    </td>

                                    <td className="p-5">

                                        <div className="flex justify-center gap-3">

                                            <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">

                                                <Eye size={18} />

                                            </button>

                                            <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition">

                                                <Download size={18} />

                                            </button>

                                            <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition">

                                                <Trash2 size={18} />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                            {filteredReports.length === 0 && (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center py-10 text-gray-500"
                                    >
                                        No reports found.
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