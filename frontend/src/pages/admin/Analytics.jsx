import {
  BarChart3,
  Bus,
  Users,
  UserCog,
  Route,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">

        <h1 className="text-4xl font-bold flex items-center gap-3">

          <BarChart3 size={40} />

          Analytics Dashboard

        </h1>

        <p className="mt-3 text-blue-100">

          Overview of SmartBus system performance.

        </p>

      </div>

      {/* Top Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">

          <Bus size={35} />

          <p className="mt-4">Total Buses</p>

          <h2 className="text-4xl font-bold mt-2">
            18
          </h2>

        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl">

          <Users size={35} />

          <p className="mt-4">Students</p>

          <h2 className="text-4xl font-bold mt-2">
            520
          </h2>

        </div>

        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-6 text-white shadow-xl">

          <UserCog size={35} />

          <p className="mt-4">Drivers</p>

          <h2 className="text-4xl font-bold mt-2">
            24
          </h2>

        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-6 text-white shadow-xl">

          <Route size={35} />

          <p className="mt-4">Routes</p>

          <h2 className="text-4xl font-bold mt-2">
            12
          </h2>

        </div>

      </div>

      {/* Performance */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-6">

            Weekly Trips

          </h2>

          <div className="space-y-5">

            <div>

              <div className="flex justify-between mb-2">

                <span>Monday</span>

                <span>80%</span>

              </div>

              <div className="h-3 bg-slate-200 rounded-full">

                <div className="h-3 bg-blue-600 rounded-full w-4/5"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Tuesday</span>

                <span>65%</span>

              </div>

              <div className="h-3 bg-slate-200 rounded-full">

                <div className="h-3 bg-green-500 rounded-full w-2/3"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Wednesday</span>

                <span>90%</span>

              </div>

              <div className="h-3 bg-slate-200 rounded-full">

                <div className="h-3 bg-cyan-500 rounded-full w-11/12"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Thursday</span>

                <span>75%</span>

              </div>

              <div className="h-3 bg-slate-200 rounded-full">

                <div className="h-3 bg-orange-500 rounded-full w-3/4"></div>

              </div>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-6">

            System Performance

          </h2>

          <div className="space-y-6">

            <div className="flex justify-between">

              <span>Bus Utilization</span>

              <span className="font-bold text-green-600">
                92%
              </span>

            </div>

            <div className="flex justify-between">

              <span>Attendance</span>

              <span className="font-bold text-blue-600">
                96%
              </span>

            </div>

            <div className="flex justify-between">

              <span>On-Time Trips</span>

              <span className="font-bold text-purple-600">
                89%
              </span>

            </div>

            <div className="flex justify-between">

              <span>Fuel Efficiency</span>

              <span className="font-bold text-orange-500">
                87%
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex items-center gap-3 mb-4">

            <TrendingUp className="text-green-500" size={30} />

            <h2 className="text-2xl font-bold">

              Monthly Growth

            </h2>

          </div>

          <h1 className="text-5xl font-bold text-green-600">

            +18%

          </h1>

          <p className="text-gray-500 mt-3">

            Compared to last month

          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex items-center gap-3 mb-4">

            <Activity className="text-blue-600" size={30} />

            <h2 className="text-2xl font-bold">

              Active Buses

            </h2>

          </div>

          <div className="w-full h-4 bg-slate-200 rounded-full">

            <div className="h-4 bg-blue-600 rounded-full w-5/6"></div>

          </div>

          <p className="mt-4 text-gray-600">

            15 of 18 buses currently running

          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex items-center gap-3 mb-4">

            <BarChart3 className="text-purple-600" size={30} />

            <h2 className="text-2xl font-bold">

              Today's Summary

            </h2>

          </div>

          <div className="space-y-3">

            <div className="flex justify-between">

              <span>Trips Completed</span>

              <span className="font-bold">

                42

              </span>

            </div>

            <div className="flex justify-between">

              <span>Students Transported</span>

              <span className="font-bold">

                486

              </span>

            </div>

            <div className="flex justify-between">

              <span>Late Trips</span>

              <span className="font-bold text-red-500">

                2

              </span>

            </div>

            <div className="flex justify-between">

              <span>Cancelled Trips</span>

              <span className="font-bold text-orange-500">

                0

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}