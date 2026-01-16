BizXplorer- Business Network Discovery Platform

Project Description
BizXplorer is a modern, responsive web application that enables businesses to register and be discovered on an interactive business network platform. Built with Vue 3, Vuetify, and Leaflet maps, BizXplorer provides location-based business discovery with integrated route planning and geocoding capabilities.

The application helps businesses gain visibility within a searchable directory while allowing users to discover local businesses, view their locations on an interactive map, and plan routes to visit them.

Key Features
📍 Location-Based Business Discovery
Interactive Leaflet.js map displaying business locations
Real-time business search and filtering via autocomplete
Map markers for all registered businesses with popup information
Automatic marker placement for newly registered businesses
🗺️ Route Planning & Navigation
Integration with Leaflet Routing Machine (OSRM)
Automatic route calculation from user location to selected business
Turn-by-turn navigation instructions
Distance and estimated travel time display
Drag-and-drop waypoint modification
📍 Geocoding & Address Validation
LocationIQ API integration for address-to-coordinates conversion
Automatic latitude/longitude population from business address
Real-time address validation during business registration
Ensures accurate location data for map display
📝 Business Registration Form
Collect business details: name, address, website, Google review link
Form validation and error handling
Snackbar notifications for user feedback
Split-view design: form on left, live map preview on right
📱 Responsive Design
Mobile-friendly UI using Vuetify Material Design components
Fluid grid layout that adapts to all screen sizes
Optimized for desktop and tablet viewing
🧭 User Geolocation
Browser-based geolocation detection
Current user position marker on map
Distance and route calculations from user's location

Technology Stack
Layer	Technology	Purpose
Frontend Framework	Vue 3	Progressive JavaScript framework
UI Components	Vuetify	Material Design component library
Routing	Vue Router	Client-side route management
State Management	Pinia	Lightweight state management
Mapping	Leaflet.js	Interactive map library
Route Planning	Leaflet Routing Machine	OSRM-based routing
Geocoding	LocationIQ API	Address-to-coordinates conversion
Build Tool	Vite	Fast development and production builds
Linting	ESLint	Code quality and style enforcement

Project Structure
BizExplorer/
├── src/
│   ├── components/
│   │   ├── NavBar.vue                    # Main navigation component
│   │   ├── footerAfrigis.vue             # Footer with version info
│   │   └── leafletMapAfrigis.vue         # Interactive map with routing
│   ├── views/
│   │   ├── HomeView.vue                  # Landing page
│   │   ├── AboutView.vue                 # Application information
│   │   ├── ContactView.vue               # Business registration form
│   │   └── GenericErrorView.vue          # Error page template
│   ├── router/
│   │   └── routes.js                     # Route definitions
│   ├── plugins/
│   │   └── vuetify.js                    # Vuetify configuration
│   ├── App.vue                           # Root component
│   └── main.js                           # Application entry point
├── public/                               # Static assets
├── package.json                          # Dependencies and scripts
├── vite.config.js                        # Vite configuration
├── eslint.config.js                      # ESLint rules
└── .gitignore                            # Git ignore rules

Core Functionality
Business Registration Flow
1. User navigates to Contact/Registration page
2. User enters business details (name, address, website)
3. Address field triggers geocoding via LocationIQ API
4. Map automatically centers on business location
5. User submits form
6. Business data sent to backend API 
7. New marker appears on map for registered business
8. Success notification displayed
   
Map Interaction Flow
1. Map loads with all registered businesses as markers
2. User's geolocation detected (if permitted)
3. User searches/selects business from autocomplete
4. Map centers on selected business
5. User clicks "Get Route" button
6. Route calculated from user location to business
7. Turn-by-turn instructions displayed
8. Distance and time estimation shown

   Application Routes
Route	Component	Purpose
/home	HomeView.vue	Landing and introduction page
/about	AboutView.vue	Application information and features
/contact	ContactView.vue	Business registration form with map preview
/error	GenericErrorView.vue	General error handling page
/not-authorised	GenericErrorView.vue	Access denial page
/:pathMatch(.*)*	GenericErrorView.vue	404 Not Found catch-all

API Integration
LocationIQ Geocoding API
Purpose: Convert addresses to latitude/longitude coordinates
Environment Variable: VITE_APP_LOCATIONIQ_KEY
Usage: Automatic address validation during business registration
Backend REST API
Endpoint: 
Method: POST
Purpose: Store registered business data
Payload: Business name, address, coordinates, website, review link

User Interface Components

Navigation Bar
Responsive menu for navigating between pages
Version display (1.0.0)
Business Registration Form
Text inputs for business details
Address field with geocoding
Latitude/Longitude read-only fields (auto-populated)
Submit button with validation

Interactive Map
9-column map view
3-column information panel
Business search autocomplete
Route planning controls
Turn-by-turn instructions container
Snackbar notifications for user feedback
Footer
Version information
Company branding
Development Setup

Prerequisites
Node.js 20+ (Alpine)
npm or yarn package manager
License & Attribution
OpenStreetMap: Map tiles and data
Leaflet.js: Open-source mapping library
LocationIQ: Geocoding service
Vuetify: Material Design components
Vue.js: Progressive JavaScript framework
