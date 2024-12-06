export const mockCards = [
    {
        id: '1',
        title: 'MO123456',
        priority: 'Critical Path',
        estimatedShippingDate: '04/Jun/2024',
        orderDetails: {
            part: 'Flight Controller',
            partNumber: 'JA-123456789',
            releaseStatus: 'Approved',
            drawingNumber: 'DR-1010',
            flightArticle: 'Navigation Module',
            estimatedShippingDate: '04/Jun/2024',
            priority: 'Critical Path'
        },
        processDetails: {
            material: 'Aluminum Alloy',
            materialStockSize: '200mm x 300mm x 20mm',
            surfaceTreatment: 'Anodizing',
            machine: 'CNC Mill'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Controller Design Specs',
                date: '01/Feb/2024',
                description: 'Comprehensive design specifications for flight controller systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Controller Test Plan',
                date: '15/Mar/2024',
                description: `"Detailed testing plan for the flight controller's quality validation."`,
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Controller Firmware Source Code',
                date: '22/Mar/2024',
                description: `"Source code for the flight controller's embedded systems."`,
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Controller Surface Coating Report',
                date: '10/Apr/2024',
                description: 'Analysis of surface treatment for flight controller housing.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '2',
        title: 'MO789012',
        priority: 'Standard',
        estimatedShippingDate: '15/Jul/2024',
        orderDetails: {
            part: 'Propulsion System',
            partNumber: 'JA-234567891',
            releaseStatus: 'In Review',
            drawingNumber: 'DR-2020',
            flightArticle: 'Propulsion Unit',
            estimatedShippingDate: '15/Jul/2024',
            priority: 'Standard'
        },
        processDetails: {
            material: 'Carbon Fiber',
            materialStockSize: '150mm x 200mm x 5mm',
            surfaceTreatment: 'Polymer Coating',
            machine: 'Autoclave'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Propulsion Workflow Documentation',
                date: '12/Feb/2024',
                description: 'Detailed workflow for propulsion system engineering.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Propulsion QA Metrics',
                date: '15/Jun/2024',
                description: 'Key quality metrics for propulsion systems.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Propulsion Control Software',
                date: '20/Jun/2024',
                description: 'Firmware and software for propulsion control systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Propulsion Surface Finish Report',
                date: '25/Jun/2024',
                description: 'Report detailing the surface treatment of propulsion materials.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '3',
        title: 'MO345678',
        priority: 'High Priority',
        estimatedShippingDate: '22/Aug/2024',
        orderDetails: {
            part: 'Navigation Algorithm',
            partNumber: 'JA-345678912',
            releaseStatus: 'Released',
            drawingNumber: 'DR-3030',
            flightArticle: 'Guidance Computer',
            estimatedShippingDate: '22/Aug/2024',
            priority: 'High Priority'
        },
        processDetails: {
            material: 'Titanium Alloy',
            materialStockSize: '300mm x 300mm x 15mm',
            surfaceTreatment: 'Electroplating',
            machine: '3D Printer'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Algorithm Workflow',
                date: '18/Jan/2024',
                description: `"Detailed workflow for the navigation algorithm's architecture."`,
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Programming',
                name: 'Algorithm Source Code',
                date: '12/Apr/2024',
                description: 'Source code repository for the navigation algorithm implementation.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Quality',
                name: 'Algorithm Validation Plan',
                date: '20/May/2024',
                description: 'Plan for validating navigation algorithm performance.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Algorithm Module Coating Analysis',
                date: '30/Jun/2024',
                description: 'Surface treatment analysis for algorithm module housing.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '4',
        title: 'MO901234',
        priority: 'Standard',
        estimatedShippingDate: '11/May/2024',
        orderDetails: {
            part: 'Battery Module',
            partNumber: 'JA-456789123',
            releaseStatus: 'Approved',
            drawingNumber: 'DR-4040',
            flightArticle: 'Energy Storage System',
            estimatedShippingDate: '11/May/2024',
            priority: 'Standard'
        },
        processDetails: {
            material: 'Lithium-Ion Composite',
            materialStockSize: '500mm x 200mm x 50mm',
            surfaceTreatment: 'Epoxy Coating',
            machine: 'Injection Molding'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Battery Design Manual',
                date: '01/Feb/2024',
                description: 'Manual detailing the design specifications of the battery module.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Battery QA Metrics',
                date: '20/Apr/2024',
                description: 'Quality assurance metrics for battery modules.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Battery Management Software',
                date: '30/Apr/2024',
                description: 'Software for managing battery charging and discharging cycles.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Battery Coating Analysis',
                date: '05/Apr/2024',
                description: 'Analysis of the surface treatment for battery housing.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '5',
        title: 'MO567890',
        priority: 'Critical Path',
        estimatedShippingDate: '18/Jun/2024',
        orderDetails: {
            part: 'Stability Framework',
            partNumber: 'JA-567890234',
            releaseStatus: 'In Progress',
            drawingNumber: 'DR-5050',
            flightArticle: 'Stability Manager',
            estimatedShippingDate: '18/Jun/2024',
            priority: 'Critical Path'
        },
        processDetails: {
            material: 'Steel Alloy',
            materialStockSize: '400mm x 400mm x 25mm',
            surfaceTreatment: 'Powder Coating',
            machine: 'Laser Cutter'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Stability Framework Specs',
                date: '05/Feb/2024',
                description: 'Specifications for engineering the stability framework.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Stability QA Checklist',
                date: '15/May/2024',
                description: 'Checklist for quality assurance of stability features.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Stability Algorithms',
                date: '12/Feb/2024',
                description: 'Algorithms for stability management in the flight system.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Stability Frame Coating Report',
                date: '10/Mar/2024',
                description: 'Details on the coating used for stability framework components.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '6',
        title: 'MO123789',
        priority: 'High Priority',
        estimatedShippingDate: '25/Apr/2024',
        orderDetails: {
            part: 'Software Controls',
            partNumber: 'JA-678901234',
            releaseStatus: 'Approved',
            drawingNumber: 'DR-6060',
            flightArticle: 'Autopilot Module',
            estimatedShippingDate: '25/Apr/2024',
            priority: 'High Priority'
        },
        processDetails: {
            material: 'Copper',
            materialStockSize: '300mm x 200mm x 10mm',
            surfaceTreatment: 'Gold Plating',
            machine: 'PCB Etching'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Control Module Workflow',
                date: '01/Mar/2024',
                description: 'Workflow details for software control modules.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Control QA Metrics',
                date: '15/Apr/2024',
                description: 'Metrics for quality control in autopilot modules.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Control Logic Source Code',
                date: '10/Apr/2024',
                description: 'Source code for software controls used in autopilot systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Module Plating Report',
                date: '20/Apr/2024',
                description: 'Analysis of surface treatments applied to control module housing.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '7',
        title: 'MO456123',
        priority: 'Standard',
        estimatedShippingDate: '09/Mar/2024',
        orderDetails: {
            part: 'Aerodynamic Structure',
            partNumber: 'JA-789012345',
            releaseStatus: 'In Review',
            drawingNumber: 'DR-7070',
            flightArticle: 'Wing Design',
            estimatedShippingDate: '09/Mar/2024',
            priority: 'Standard'
        },
        processDetails: {
            material: 'High-Strength Polymer',
            materialStockSize: '250mm x 500mm x 15mm',
            surfaceTreatment: 'UV Protection Coating',
            machine: 'CNC Router'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Aerodynamic Workflow',
                date: '15/Jan/2024',
                description: 'Workflow for the development of aerodynamic structures.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Wing Design QA Checklist',
                date: '01/Feb/2024',
                description: 'Quality checklist for aerodynamic wing design.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Aerodynamic Simulation Code',
                date: '10/Feb/2024',
                description: 'Codebase for simulating aerodynamic performance.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Wing Coating Analysis',
                date: '05/Mar/2024',
                description: 'Analysis of the surface treatment applied to wing structures.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '8',
        title: 'MO789456',
        priority: 'Critical Path',
        estimatedShippingDate: '12/Oct/2024',
        orderDetails: {
            part: 'Safety Features',
            partNumber: 'JA-890123456',
            releaseStatus: 'Released',
            drawingNumber: 'DR-8080',
            flightArticle: 'Emergency Landing Gear',
            estimatedShippingDate: '12/Oct/2024',
            priority: 'Critical Path'
        },
        processDetails: {
            material: 'Stainless Steel',
            materialStockSize: '100mm x 150mm x 8mm',
            surfaceTreatment: 'Rust Prevention Coating',
            machine: 'Laser Cutter'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Landing Gear Framework',
                date: '05/Jun/2024',
                description: 'Framework specifications for emergency landing gear.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Safety Validation Report',
                date: '15/Jun/2024',
                description: 'Validation results for emergency safety features.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Safety Protocols Codebase',
                date: '01/Jul/2024',
                description: 'Programming details for safety protocol automation.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Gear Coating Report',
                date: '10/Jul/2024',
                description: 'Report on surface treatment processes for landing gear.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '9',
        title: 'MO234567',
        priority: 'High Priority',
        estimatedShippingDate: '03/Nov/2024',
        orderDetails: {
            part: 'AI System',
            partNumber: 'JA-901234567',
            releaseStatus: 'In Progress',
            drawingNumber: 'DR-9090',
            flightArticle: 'AI Navigation',
            estimatedShippingDate: '03/Nov/2024',
            priority: 'High Priority'
        },
        processDetails: {
            material: 'Silicon Wafer',
            materialStockSize: '300mm x 300mm x 2mm',
            surfaceTreatment: 'Anti-Scratch Coating',
            machine: 'Semiconductor Lithography'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'AI System Workflow',
                date: '10/Feb/2024',
                description: 'Engineering workflow for AI navigation systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'AI System QA Report',
                date: '20/Mar/2024',
                description: 'QA report for the AI navigation system.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'AI Algorithms Source Code',
                date: '01/May/2024',
                description: 'Source code for AI algorithms in navigation.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'AI Hardware Coating Details',
                date: '10/Jun/2024',
                description: 'Coating details for AI hardware modules.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '10',
        title: 'MO890123',
        priority: 'Critical Path',
        estimatedShippingDate: '21/Jan/2024',
        orderDetails: {
            part: 'Ground Control System',
            partNumber: 'JA-012345678',
            releaseStatus: 'Approved',
            drawingNumber: 'DR-10101',
            flightArticle: 'Control Hub',
            estimatedShippingDate: '21/Jan/2024',
            priority: 'Critical Path'
        },
        processDetails: {
            material: 'Carbon Steel',
            materialStockSize: '400mm x 400mm x 50mm',
            surfaceTreatment: 'Galvanization',
            machine: '5-Axis CNC Machine'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Control Hub Manual',
                date: '15/Dec/2023',
                description: 'Operational manual for the ground control system.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Control System QA Checklist',
                date: '05/Jan/2024',
                description: 'Quality assurance checklist for ground control systems.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Ground Control Software',
                date: '20/Jan/2024',
                description: 'Software used for operating ground control systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Control System Coating Report',
                date: '25/Jan/2024',
                description: 'Details of the coating applied to the control system housing.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '11',
        title: 'MO678901',
        priority: 'Standard',
        estimatedShippingDate: '14/Feb/2024',
        orderDetails: {
            part: 'Flight Sensors',
            partNumber: 'JA-678901234',
            releaseStatus: 'Released',
            drawingNumber: 'DR-11111',
            flightArticle: 'Sensor Array',
            estimatedShippingDate: '14/Feb/2024',
            priority: 'Standard'
        },
        processDetails: {
            material: 'Optical Glass',
            materialStockSize: '100mm x 100mm x 2mm',
            surfaceTreatment: 'Anti-Reflective Coating',
            machine: 'Laser Engraver'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Sensor Calibration Guide',
                date: '12/Jan/2024',
                description: 'Guidelines for calibrating the flight sensors.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Sensor QA Checklist',
                date: '25/Jan/2024',
                description: 'Checklist for quality validation of flight sensors.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Sensor Data Processing Code',
                date: '05/Feb/2024',
                description: 'Code for processing data from flight sensors.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Sensor Surface Coating Details',
                date: '10/Feb/2024',
                description: 'Surface treatment details for sensor modules.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '12',
        title: 'MO345123',
        priority: 'High Priority',
        estimatedShippingDate: '07/Sep/2024',
        orderDetails: {
            part: 'Autonomous Takeoff',
            partNumber: 'JA-345678901',
            releaseStatus: 'In Progress',
            drawingNumber: 'DR-12121',
            flightArticle: 'Takeoff System',
            estimatedShippingDate: '07/Sep/2024',
            priority: 'High Priority'
        },
        processDetails: {
            material: 'Titanium Alloy',
            materialStockSize: '350mm x 350mm x 30mm',
            surfaceTreatment: 'Heat-Resistant Coating',
            machine: '3D Printer'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Takeoff System Workflow',
                date: '15/Mar/2024',
                description: 'Engineering workflow for the autonomous takeoff system.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Takeoff QA Checklist',
                date: '20/May/2024',
                description: 'Plan for validating takeoff system functionality.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Takeoff Algorithm',
                date: '15/Apr/2024',
                description: 'Algorithm for autonomous takeoff operations.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Takeoff System Coating Report',
                date: '05/May/2024',
                description: 'Details of the coating process for takeoff system components.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '13',
        title: 'MO123567',
        priority: 'Critical Path',
        estimatedShippingDate: '30/Apr/2024',
        orderDetails: {
            part: 'Energy Optimization System',
            partNumber: 'JA-234567890',
            releaseStatus: 'In Progress',
            drawingNumber: 'DR-13131',
            flightArticle: 'Power Manager',
            estimatedShippingDate: '30/Apr/2024',
            priority: 'Critical Path'
        },
        processDetails: {
            material: 'Graphene Composite',
            materialStockSize: '200mm x 400mm x 10mm',
            surfaceTreatment: 'Thermal Resistance Coating',
            machine: 'Roll-to-Roll Manufacturing'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Energy Optimization Workflow',
                date: '15/Feb/2024',
                description: 'Workflow for energy system optimization in flight systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Energy Optimization QA Report',
                date: '01/Apr/2024',
                description: 'QA report on energy optimization system efficiency.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Energy Management Algorithm',
                date: '20/Mar/2024',
                description: 'Algorithm for managing energy optimization in flight systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Energy Module Coating Details',
                date: '25/Mar/2024',
                description: 'Surface coating process for energy module protection.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '14',
        title: 'MO456789',
        priority: 'Standard',
        estimatedShippingDate: '05/Aug/2024',
        orderDetails: {
            part: 'Taxi Deployment System',
            partNumber: 'JA-567890123',
            releaseStatus: 'Approved',
            drawingNumber: 'DR-14141',
            flightArticle: 'Landing Gear',
            estimatedShippingDate: '05/Aug/2024',
            priority: 'Standard'
        },
        processDetails: {
            material: 'High-Grade Aluminum',
            materialStockSize: '500mm x 500mm x 20mm',
            surfaceTreatment: 'Anodizing',
            machine: 'Hydraulic Press'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Taxi Deployment Design Specs',
                date: '10/Jun/2024',
                description: 'Specifications for taxi deployment system components.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Taxi Deployment QA Checklist',
                date: '20/Jul/2024',
                description: 'Checklist for quality assurance in taxi deployment systems.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Taxi Deployment Automation Code',
                date: '05/Jul/2024',
                description: 'Code for automating taxi deployment operations.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Taxi System Coating Analysis',
                date: '30/Jul/2024',
                description: 'Analysis of surface treatment for taxi deployment system.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '15',
        title: 'MO678234',
        priority: 'High Priority',
        estimatedShippingDate: '19/Jun/2024',
        orderDetails: {
            part: 'Landing Gear Prototype',
            partNumber: 'JA-678901234',
            releaseStatus: 'In Review',
            drawingNumber: 'DR-15151',
            flightArticle: 'Landing Gear Assembly',
            estimatedShippingDate: '19/Jun/2024',
            priority: 'High Priority'
        },
        processDetails: {
            material: 'Titanium Steel Blend',
            materialStockSize: '350mm x 350mm x 15mm',
            surfaceTreatment: 'Powder Coating',
            machine: 'Vertical CNC Mill'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Prototype Assembly Guide',
                date: '15/May/2024',
                description: 'Guide to assembling the landing gear prototype.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Landing Gear QA Metrics',
                date: '01/Jun/2024',
                description: 'Metrics for validating prototype landing gear assembly.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Landing Gear Actuation Code',
                date: '10/Jun/2024',
                description: 'Codebase for landing gear actuation and control.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Landing Gear Surface Treatment Report',
                date: '25/Jun/2024',
                description: 'Surface treatment applied to landing gear components.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '16',
        title: 'MO890456',
        priority: 'Standard',
        estimatedShippingDate: '28/Jul/2024',
        orderDetails: {
            part: 'Flight Dynamics Simulator',
            partNumber: 'JA-890123456',
            releaseStatus: 'Released',
            drawingNumber: 'DR-16161',
            flightArticle: 'Simulator Module',
            estimatedShippingDate: '28/Jul/2024',
            priority: 'Standard'
        },
        processDetails: {
            material: 'Aerospace Grade Aluminum',
            materialStockSize: '300mm x 300mm x 10mm',
            surfaceTreatment: 'Protective Film Coating',
            machine: 'High-Precision Lathe'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Simulator Design Documentation',
                date: '05/May/2024',
                description: 'Engineering documentation for flight dynamics simulator.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Simulation QA Metrics',
                date: '15/Jul/2024',
                description: 'Metrics used to validate simulator performance.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Simulation Engine Source Code',
                date: '20/May/2024',
                description: 'Code for the engine driving simulation dynamics.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Simulator Coating Report',
                date: '30/May/2024',
                description: 'Details on surface treatments for simulator components.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '17',
        title: 'MO234890',
        priority: 'Critical Path',
        estimatedShippingDate: '02/Dec/2024',
        orderDetails: {
            part: 'Fail-Safe Protocols',
            partNumber: 'JA-901234567',
            releaseStatus: 'In Progress',
            drawingNumber: 'DR-17171',
            flightArticle: 'Emergency Control',
            estimatedShippingDate: '02/Dec/2024',
            priority: 'Critical Path'
        },
        processDetails: {
            material: 'High-Durability Composite',
            materialStockSize: '200mm x 300mm x 12mm',
            surfaceTreatment: 'Anti-Corrosion Coating',
            machine: 'Plasma Cutter'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Fail-Safe Engineering Workflow',
                date: '15/Oct/2024',
                description: 'Engineering process for fail-safe protocol integration.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Fail-Safe QA Checklist',
                date: '25/Oct/2024',
                description: 'Checklist for quality validation of fail-safe protocols.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Emergency Response Code',
                date: '01/Nov/2024',
                description: 'Codebase for emergency control protocol software.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Fail-Safe Coating Report',
                date: '10/Nov/2024',
                description: 'Surface treatment details for fail-safe control components.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '18',
        title: 'MO567234',
        priority: 'High Priority',
        estimatedShippingDate: '20/Oct/2024',
        orderDetails: {
            part: 'Charging Station',
            partNumber: 'JA-567890123',
            releaseStatus: 'Released',
            drawingNumber: 'DR-18181',
            flightArticle: 'Energy Dock',
            estimatedShippingDate: '20/Oct/2024',
            priority: 'High Priority'
        },
        processDetails: {
            material: 'Reinforced Plastic',
            materialStockSize: '400mm x 500mm x 8mm',
            surfaceTreatment: 'UV-Resistant Coating',
            machine: 'Injection Molding Machine'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Dock Engineering Design Specs',
                date: '01/Aug/2024',
                description: 'Design specifications for the charging dock station.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Charging Dock QA Checklist',
                date: '10/Sep/2024',
                description: 'Checklist for ensuring quality standards for charging docks.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Dock Control Firmware',
                date: '15/Sep/2024',
                description: 'Firmware for managing charging dock operations.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Dock Coating Process Report',
                date: '25/Sep/2024',
                description: 'Report on coating applications for charging dock surfaces.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '19',
        title: 'MO890678',
        priority: 'Critical Path',
        estimatedShippingDate: '15/Jan/2025',
        orderDetails: {
            part: 'Flight Stabilizer',
            partNumber: 'JA-678901234',
            releaseStatus: 'In Review',
            drawingNumber: 'DR-19191',
            flightArticle: 'Stabilization Module',
            estimatedShippingDate: '15/Jan/2025',
            priority: 'Critical Path'
        },
        processDetails: {
            material: 'Aluminum-Titanium Alloy',
            materialStockSize: '300mm x 300mm x 15mm',
            surfaceTreatment: 'Heat-Resistant Coating',
            machine: '5-Axis CNC Machine'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Stabilizer Design Guide',
                date: '10/Nov/2024',
                description: 'Design guidelines for flight stabilizer components.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Stabilizer QA Report',
                date: '20/Nov/2024',
                description: 'Quality report for stabilizer module functionality.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Stabilization Algorithm Code',
                date: '01/Dec/2024',
                description: 'Code for stabilization algorithms in the flight system.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Stabilizer Coating Analysis',
                date: '15/Dec/2024',
                description: 'Analysis of surface treatments for stabilizer module protection.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    },
    {
        id: '20',
        title: 'MO1234567',
        priority: 'High Priority',
        estimatedShippingDate: '18/Feb/2025',
        orderDetails: {
            part: 'Emergency Control System',
            partNumber: 'JA-890123456',
            releaseStatus: 'Approved',
            drawingNumber: 'DR-20202',
            flightArticle: 'Control Override Module',
            estimatedShippingDate: '18/Feb/2025',
            priority: 'High Priority'
        },
        processDetails: {
            material: 'Aircraft-Grade Steel',
            materialStockSize: '500mm x 600mm x 20mm',
            surfaceTreatment: 'Anti-Rust Coating',
            machine: 'High-Precision CNC Lathe'
        },
        files: [
            {
                id: 'file1',
                category: 'Process Engineering',
                name: 'Control System Design Specs',
                date: '05/Jan/2025',
                description: 'Specifications for emergency control override systems.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file2',
                category: 'Quality',
                name: 'Emergency QA Checklist',
                date: '15/Jan/2025',
                description: 'Quality checklist for emergency system components.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            },
            {
                id: 'file3',
                category: 'Programming',
                name: 'Emergency Control Firmware',
                date: '25/Jan/2025',
                description: 'Firmware for managing emergency control operations.',
                type: 'PDF',
                thumbnail: 'https://placehold.co/200x200?text=PDF'
            },
            {
                id: 'file4',
                category: 'Surface Treatment',
                name: 'Emergency System Coating Analysis',
                date: '05/Feb/2025',
                description: 'Analysis of coating applied to emergency system housing.',
                type: 'DOC',
                thumbnail: 'https://placehold.co/200x200?text=DOC'
            }
        ]
    }
];
