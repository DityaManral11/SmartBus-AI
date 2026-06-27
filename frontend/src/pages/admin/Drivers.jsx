import { useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Users,
  Phone,
  Mail,
  Bus,
} from "lucide-react";

export default function Drivers() {
  const [search, setSearch] = useState("");

  const drivers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      email: "rahul@gmail.com",
      bus: "BUS-07",
      status: "Active",
    },
    {
      id: 2,
      name: "Amit Kumar",
      phone: "+91 9876543211",
      email: "amit@gmail.com",
      bus: "BUS-05",
      status: "On Leave",
    },
    {
      id: 3,
      name: "Vivek Singh",
      phone: "+91 9876543212",
      email: "vivek@gmail.com",
      bus: "BUS-02",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Rakesh Verma",
      phone: "+91 9876543213",
      email: "rakesh@gmail.com",
      bus: "BUS-09",
      status: "Active",
    },
  ];

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.bus.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div>

            <h1 className="text-4xl font-bold flex items-center gap-3">

              <Users size={38} />

              Drivers

            </h1>

            <p className="mt-2 text-blue-100">

              Manage all bus drivers.

            </p>

          </div>

          <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

            <div className="flex items-center gap-2">

              <Plus size={18} />

              Add Driver

            </div>

          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">

          <Users size={34} />

          <p className="mt-4">Total Drivers</p>

          <h2 className="text-3xl font-bold mt-2">24</h2>

        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl">

          <Bus size={34} />

          <p className="mt-4">Active Drivers</p>

          <h2 className="text-3xl font-bold mt-2">20</h2>

        </div>

        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-6 text-white shadow-xl">

          <Users size={34} />

          <p className="mt-4">On Leave</p>

          <h2 className="text-3xl font-bold mt-2">4</h2>

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
            placeholder="Search driver..."
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

                <th className="text-left p-5">Driver</th>

                <th className="text-left p-5">Phone</th>

                <th className="text-left p-5">Email</th>

                <th className="text-left p-5">Bus</th>

                <th className="text-left p-5">Status</th>

                <th className="text-center p-5">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredDrivers.map((driver) => (
                <tr
                  key={driver.id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="p-5 font-semibold">

                    {driver.name}

                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <Phone size={16} />

                      {driver.phone}

                    </div>

                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <Mail size={16} />

                      {driver.email}

                    </div>

                  </td>

                  <td className="p-5">

                    {driver.bus}

                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${driver.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : driver.status === "On Leave"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {driver.status}
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

              {filteredDrivers.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No drivers found.
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