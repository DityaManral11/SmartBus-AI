import { useState } from "react";
import {
  MapPinned,
  Bus,
  Users,
  Route,
  Search,
  Navigation,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ChangeMapView({ center }) {
  const map = useMap();

  map.setView(center, 14);

  return null;
}

export default function LiveTracking() {
  const [search, setSearch] = useState("");

  const buses = [
    {
      id: 1,
      bus: "BUS-01",
      driver: "Rahul Sharma",
      route: "North Campus",
      students: 38,
      speed: "42 km/h",
      status: "Running",
      nextStop: "City Mall",

      position: [28.6139, 77.2090],

      routePath: [
        [28.6139, 77.2090],
        [28.6155, 77.2125],
        [28.6185, 77.2160],
        [28.6210, 77.2200],
      ],
    },

    {
      id: 2,
      bus: "BUS-02",
      driver: "Amit Kumar",
      route: "South Colony",
      students: 34,
      speed: "0 km/h",
      status: "Stopped",
      nextStop: "Bus Stand",

      position: [28.6185, 77.2180],

      routePath: [
        [28.6185, 77.2180],
        [28.6200, 77.2210],
        [28.6225, 77.2240],
        [28.6250, 77.2270],
      ],
    },

    {
      id: 3,
      bus: "BUS-03",
      driver: "Rakesh Verma",
      route: "Engineering Block",
      students: 41,
      speed: "35 km/h",
      status: "Running",
      nextStop: "Library",

      position: [28.6095, 77.2245],

      routePath: [
        [28.6095, 77.2245],
        [28.6115, 77.2265],
        [28.6145, 77.2295],
        [28.6175, 77.2325],
      ],
    },
  ];

  const [selectedBus, setSelectedBus] = useState(buses[0]);

  const filtered = buses.filter(
    (bus) =>
      bus.bus.toLowerCase().includes(search.toLowerCase()) ||
      bus.driver.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 rounded-3xl p-8 text-white shadow-xl">

        <h1 className="text-4xl font-bold flex items-center gap-3">

          <MapPinned size={40} />

          Live Bus Tracking

        </h1>

        <p className="mt-3 text-blue-100">

          Track all buses in real time.

        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-blue-600 text-white rounded-3xl p-6">

          <Bus size={35} />

          <p className="mt-4">Active Buses</p>

          <h2 className="text-3xl font-bold">15</h2>

        </div>

        <div className="bg-green-600 text-white rounded-3xl p-6">

          <Users size={35} />

          <p className="mt-4">Students Travelling</p>

          <h2 className="text-3xl font-bold">486</h2>

        </div>

        <div className="bg-orange-500 text-white rounded-3xl p-6">

          <Route size={35} />

          <p className="mt-4">Running Routes</p>

          <h2 className="text-3xl font-bold">12</h2>

        </div>

        <div className="bg-red-500 text-white rounded-3xl p-6">

          <Navigation size={35} />

          <p className="mt-4">Delayed</p>

          <h2 className="text-3xl font-bold">2</h2>

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
            placeholder="Search Bus or Driver..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 py-4 border rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none"
          />

        </div>

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Bus List */}

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <h2 className="text-2xl font-bold mb-6">

            Active Buses

          </h2>

          <div className="space-y-4">

            {filtered.map((bus) => (

              <div
                key={bus.id}
                onClick={() => setSelectedBus(bus)}
                className={`border rounded-2xl p-4 cursor-pointer transition ${selectedBus.id === bus.id
                  ? "border-blue-600 bg-blue-50"
                  : "hover:bg-slate-50"
                  }`}
              >
                <div className="flex justify-between">

                  <h3 className="font-bold">

                    {bus.bus}

                  </h3>

                  <span
                    className={`text-sm px-3 py-1 rounded-full ${bus.status === "Running"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {bus.status}
                  </span>

                </div>

                <p className="text-gray-500 mt-2">

                  {bus.driver}

                </p>

                <p className="text-sm mt-1">

                  {bus.route}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Live Map */}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Live Map
            </h2>

          </div>

          <MapContainer
            center={[28.6139, 77.2090]}
            zoom={13}
            style={{ height: "450px", width: "100%" }}
          >

            <Polyline
              positions={selectedBus.routePath}
              pathOptions={{
                color: "#2563eb",
                weight: 5,
              }}
            />

            <ChangeMapView center={selectedBus.position} />

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filtered.map((bus) => (

              <Marker
                key={bus.id}
                position={bus.position}
                eventHandlers={{
                  click: () => setSelectedBus(bus),
                }}
              >

                <Popup>

                  <strong>{bus.bus}</strong>

                  <br />

                  Driver: {bus.driver}

                  <br />

                  Route: {bus.route}

                  <br />

                  Students: {bus.students}

                  <br />

                  Speed: {bus.speed}

                </Popup>

              </Marker>

            ))}

          </MapContainer>

        </div>

        {/* Selected Bus Details */}

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <h2 className="text-2xl font-bold mb-6">

            Selected Bus Details

          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <p className="text-gray-500">Bus Number</p>

              <h3 className="font-bold text-xl">

                {selectedBus.bus}
              </h3>

            </div>

            <div>

              <p className="text-gray-500">Driver</p>

              <h3 className="font-bold text-xl">

                {selectedBus.driver}

              </h3>

            </div>

            <div>

              <p className="text-gray-500">Route</p>

              <h3 className="font-bold text-xl">

                {selectedBus.route}

              </h3>

            </div>

            <div>

              <p className="text-gray-500">Students</p>

              <h3 className="font-bold text-xl">

                {selectedBus.students}

              </h3>

            </div>

            <div>

              <p className="text-gray-500">Speed</p>

              <h3 className="font-bold text-xl text-green-600">

                {selectedBus.speed}

              </h3>

            </div>

            <div>

              <p className="text-gray-500">Next Stop</p>

              <h3 className="font-bold text-xl">

                {selectedBus.nextStop}

              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>



  );
}