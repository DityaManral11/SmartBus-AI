import { useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  GraduationCap,
  Bus,
  MapPinned,
} from "lucide-react";

export default function Students() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Aman Kumar",
      roll: "22CSE101",
      bus: "BUS-07",
      pickup: "City Mall",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      roll: "22CSE102",
      bus: "BUS-03",
      pickup: "Bus Stand",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Verma",
      roll: "22CSE103",
      bus: "BUS-05",
      pickup: "University Gate",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Sneha Kumari",
      roll: "22CSE104",
      bus: "BUS-01",
      pickup: "Engineering Block",
      status: "Active",
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div>

            <h1 className="text-4xl font-bold flex items-center gap-3">

              <GraduationCap size={38} />

              Students

            </h1>

            <p className="mt-2 text-blue-100">

              Manage all registered students.

            </p>

          </div>

          <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

            <div className="flex items-center gap-2">

              <Plus size={18} />

              Add Student

            </div>

          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">

          <GraduationCap size={34} />

          <p className="mt-4">Total Students</p>

          <h2 className="text-3xl font-bold mt-2">
            520
          </h2>

        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl">

          <Bus size={34} />

          <p className="mt-4">Assigned Bus</p>

          <h2 className="text-3xl font-bold mt-2">
            18
          </h2>

        </div>

        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-6 text-white shadow-xl">

          <GraduationCap size={34} />

          <p className="mt-4">Active Students</p>

          <h2 className="text-3xl font-bold mt-2">
            486
          </h2>

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
            placeholder="Search student..."
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

                <th className="text-left p-5">Student</th>

                <th className="text-left p-5">Roll No</th>

                <th className="text-left p-5">Bus</th>

                <th className="text-left p-5">Pickup Point</th>

                <th className="text-left p-5">Status</th>

                <th className="text-center p-5">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredStudents.map((student) => (

                <tr
                  key={student.id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="p-5 font-semibold">

                    {student.name}

                  </td>

                  <td className="p-5">

                    {student.roll}

                  </td>

                  <td className="p-5">

                    {student.bus}

                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <MapPinned size={16} />

                      {student.pickup}

                    </div>

                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }`}
                    >
                      {student.status}
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

              {filteredStudents.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No students found.
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