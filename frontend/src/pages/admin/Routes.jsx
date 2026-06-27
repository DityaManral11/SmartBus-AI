import { useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Route,
  Bus,
  UserCog,
  MapPinned,
} from "lucide-react";

export default function Routes() {
  const [search, setSearch] = useState("");

  const routes = [
    {
      id: 1,
      route: "North Campus",
      bus: "BUS-07",
      driver: "Rahul Sharma",
      stops: 8,
      status: "Active",
    },
    {
      id: 2,
      route: "City Center",
      bus: "BUS-03",
      driver: "Amit Kumar",
      stops: 6,
      status: "Active",
    },
    {
      id: 3,
      route: "South Colony",
      bus: "BUS-05",
      driver: "Vivek Singh",
      stops: 10,
      status: "Inactive",
    },
    {
      id: 4,
      route: "Engineering Block",
      bus: "BUS-09",
      driver: "Rakesh Verma",
      stops: 5,
      status: "Active",
    },
  ];

  const filteredRoutes = routes.filter(
    (item) =>
      item.route.toLowerCase().includes(search.toLowerCase()) ||
      item.bus.toLowerCase().includes(search.toLowerCase()) ||
      item.driver.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div>

            <h1 className="text-4xl font-bold flex items-center gap-3">

              <Route size={38} />

              Routes

            </h1>

            <p className="mt-2 text-blue-100">

              Manage all bus routes.

            </p>

          </div>

          <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

            <div className="flex items-center gap-2">

              <Plus size={18} />

              Add Route

            </div>

          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">

          <Route size={34} />

          <p className="mt-4">Total Routes</p>

          <h2 className="text-3xl font-bold mt-2">
            12
          </h2>

        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl">

          <Bus size={34} />

          <p className="mt-4">Assigned Buses</p>

          <h2 className="text-3xl font-bold mt-2">
            10
          </h2>

        </div>

        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-6 text-white shadow-xl">

          <MapPinned size={34} />

          <p className="mt-4">Total Stops</p>

          <h2 className="text-3xl font-bold mt-2">
            67
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
            placeholder="Search route..."
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

                <th className="text-left p-5">Route</th>
                <th className="text-left p-5">Bus</th>
                <th className="text-left p-5">Driver</th>
                <th className="text-left p-5">Stops</th>
                <th className="text-left p-5">Status</th>
                <th className="text-center p-5">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredRoutes.map((item) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="p-5 font-semibold">
                    {item.route}
                  </td>

                  <td className="p-5">
                    {item.bus}
                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <UserCog size={16} />

                      {item.driver}

                    </div>

                  </td>

                  <td className="p-5">
                    {item.stops} Stops
                  </td>

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

              {filteredRoutes.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No routes found.
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