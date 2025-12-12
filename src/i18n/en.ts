
export const en = {
    navbar: {
      deploy: 'DEPLOY',
      save: 'Save',
      test: 'Test',
      publish: 'Publish',
      project: 'Project Alpha',
      backToDash: 'Back to Dashboard',
    },
    sidebar: {
      title: 'Component Library',
      search: 'Search nodes...',
      categories: {
        'Source': 'Source',
        'AI Model': 'AI Model',
        'Logic': 'Logic',
        'Output': 'Output'
      }
    },
    dashboard: {
      menu: {
        platform: 'Platform',
        config: 'Configuration',
        home: 'Home',
        projects: 'Projects',
        workflows: 'Workflows',
        monitoring: 'Monitoring',
        deployments: 'Deployments',
        explore: 'Explore',
        settings: 'Settings',
        help: 'Help & Docs',
        notifications: 'Notifications',
        selfHosted: 'Self-Hosted',
        shOverview: 'Overview',
        shDevices: 'Devices',
        shLicenses: 'Licenses',
        media: 'Media Library',
      },
      headers: {
        myWorkflows: 'My Workflows',
        createNew: 'Create New',
        shOverview: 'Self-Hosted Overview',
        shOverviewStats: 'Overview',
        mediaLibrary: 'Media Library',
      },
      stats: {
        totalFlows: 'Total Flows',
        activeNodes: 'Active Nodes',
        uptime: 'System Uptime'
      },
      card: {
        nodes: 'Nodes',
        edit: 'Edit Workflow',
        lastUpdated: 'Updated'
      },
      usage: {
        title: 'Credits used',
        used: '0 credits used',
        reset: 'Resets on December 31',
        upgrade: 'Upgrade'
      },
      pagination: {
        showing: 'Showing',
        of: 'of'
      }
    },
    media: {
      storage: {
        title: 'Storage Usage',
        used: 'Used',
        total: 'Total',
        items: 'Items',
      },
      filters: {
        all: 'All Assets',
        images: 'Images',
        videos: 'Videos',
      },
      upload: 'Upload Files',
      searchPlaceholder: 'Search files...',
      table: {
        name: 'Name',
        type: 'Type',
        size: 'Size',
        date: 'Uploaded At',
        dimension: 'Dimensions',
        actions: 'Actions',
      },
      empty: 'No media assets found.',
    },
    selfHosted: {
      breadcrumbs: {
        root: 'Self-Hosted',
        overview: 'Overview',
        devices: 'Devices',
        deviceDetail: 'Device Details',
      },
      timeRange: {
        last24h: 'Last 24h',
        last7d: 'Last 7 Days',
        last30d: 'Last 30 Days',
        custom: 'Custom',
      },
      cards: {
        totalDevices: 'Total Devices',
        licenseUsage: 'License Usage',
        usageSummary: 'Usage Summary',
        edge: 'EDGE',
        cloud: 'CLOUD',
        expiring: 'expiring soon',
      },
      status: {
        online: 'Online',
        offline: 'Offline',
        pending: 'Pending License',
        draining: 'Draining',
        decommissioned: 'Decommissioned',
      },
      tooltips: {
        edgeMode: 'Only billed by Self-Hosted Device License. Usage is for observability only and not counted towards Cloud pay-as-you-go.',
        cloudMode: 'Usage on this device counts towards Cloud pay-as-you-go billing.',
        offlineLease: 'Supports running without internet connection for up to 30 days.'
      },
      charts: {
        deviceStatus: 'Device Status',
        usageTrend: 'Usage Trend',
      },
      alerts: {
        title: 'Active Alerts',
        longOffline: 'Device X offline for > 30m',
        licenseExpiring: 'License ABC expiring in 7 days',
        highUsage: 'Unusual Cloud usage spike',
        levels: {
            critical: 'CRITICAL',
            warning: 'WARNING',
            info: 'INFO'
        }
      },
      shortcuts: {
        title: 'Shortcuts',
        viewDevices: 'View Device List',
        viewLicenses: 'Manage Licenses',
        recentReleases: 'Recent Deployments',
      },
      devices: {
        title: 'Device List',
        searchPlaceholder: 'Search Name, Device ID, Runtime ID...',
        filters: {
            all: 'All Status',
            online: 'Online',
            offline: 'Offline',
            pending: 'Pending',
            draining: 'Draining',
            decommissioned: 'Decommissioned',
            edge: 'Edge',
            cloud: 'Cloud',
            region: 'Region',
            tags: 'Tags'
        },
        alert: {
            pendingMessage: '3 New devices detected pending license binding.',
            filterAction: 'Filter Pending Devices'
        },
        table: {
            device: 'Device',
            ids: 'IDs',
            status: 'Status',
            mode: 'Mode',
            license: 'License',
            config: 'Config',
            lastSeen: 'Last Seen',
            usage: 'Usage',
            actions: 'Actions',
            unbound: 'Unbound'
        },
        actions: {
            refresh: 'Refresh',
            export: 'Export',
            view: 'View',
            bind: 'Bind License',
            drain: 'Drain Node',
            decommission: 'Decommission'
        }
      },
      deviceDetail: {
        tabs: {
            overview: 'Overview',
            deployment: 'Workflow Deployment',
            usage: 'Usage',
            logs: 'Logs & Telemetry',
        },
        header: {
            deviceInfo: 'Device Info',
            licenseInfo: 'License Info',
            configInfo: 'Config Status',
            changeLicense: 'Change License',
            changeMode: 'Change Mode',
            offlineLease: 'Offline Lease',
            audit: 'Last Update',
        },
        modeSwitchModal: {
            title: 'Change Deployment Mode',
            edgeToCloud: 'You are switching this device to CLOUD mode. All subsequent usage will be metered and billed according to the Cloud Pay-as-you-go rates.',
            cloudToEdge: 'You are switching this device to EDGE mode. Cloud processing capabilities will be disabled, and usage will only be tracked for observability purposes.',
            confirm: 'Confirm Switch',
            cancel: 'Cancel'
        },
        overview: {
            runningStatus: 'Running Status',
            heartbeat: 'Last Heartbeat',
            activeStreams: 'Active Streams',
            billing: {
                edge: 'EDGE: Only billed by device license.',
                cloud: 'CLOUD: Usage enters cloud billing.',
            },
            configSummary: 'Config Summary',
            usageSummary: 'Usage Summary',
            imageCount: 'Image Count',
            videoSeconds: 'Video Seconds'
        },
        deployment: {
            currentVersion: 'Current Config Version',
            status: 'Status',
            history: 'Version History',
            rollback: 'Rollback',
            streams: 'Streams',
            addStream: 'Add Stream',
            table: {
                stream: 'Stream',
                input: 'Input',
                workflow: 'Workflow',
                status: 'Status',
                telemetry: 'Telemetry',
                updated: 'Updated',
            },
            snapshot: {
                view: 'Snapshot',
                diff: 'Diff',
                rollback: 'Rollback to this version',
                empty: 'No streams configured in this version.',
                emptyDiff: 'No changes recorded vs previous version.',
                fields: {
                    workflow: 'Workflow',
                    input: 'Input',
                    concurrency: 'Concurrency',
                    telemetry: 'Telemetry'
                }
            },
            drawer: {
                titleAdd: 'Add New Stream',
                titleEdit: 'Edit Stream',
                basic: 'Basic Info',
                input: 'Input Source',
                workflow: 'Workflow Binding',
                policy: 'Run Policy',
                save: 'Save Changes',
                cancel: 'Cancel',
                versionStrategy: 'Version Strategy',
                strategies: {
                  latest: 'Latest',
                  specific: 'Specific Version'
                },
                selectVersion: 'Select Version',
            }
        },
        usage: {
            filters: {
                dimension: 'Group By',
                mode: 'Deployment Mode',
                metric: 'Metric',
            },
            dimensions: {
                workflow: 'Workflow',
                stream: 'Stream',
            },
            table: {
                id: 'ID',
                images: 'Image Count',
                video: 'Video (s)',
                calls: 'Calls',
                errors: 'Error Rate',
                mode: 'Mode',
            },
            charts: {
                errorRate: 'Error Rate Trend',
            },
            disclaimer: {
                cloud: 'Usage for CLOUD mode contributes to pay-as-you-go billing.',
                edge: 'Usage for EDGE mode is for monitoring only and not billed.',
            },
            cloudNotice: 'Usage shown here for CLOUD mode devices contributes to your monthly bill.',
        },
        logs: {
            recentEvents: 'Recent Telemetry Events',
            viewObservability: 'View in Observability Platform',
        }
      },
      licenseModal: {
        title: 'Select License',
        searchPlaceholder: 'Search License Name, ID...',
        filter: {
          all: 'All Types',
          selfHosted: 'Self-Hosted',
          cloud: 'Cloud'
        },
        columns: {
          license: 'License Details',
          type: 'Type / Billing',
          usage: 'Device Usage',
          expiry: 'Expires',
          features: 'Features'
        },
        summary: {
          selected: 'Selected License',
          billingDesc: 'Billing Description',
          capabilities: 'Capabilities'
        },
        confirm: 'Bind License',
        cancel: 'Cancel'
      },
      licenses: {
        title: 'License Management',
        searchPlaceholder: 'Search license name, ID...',
        actions: {
            activate: 'Activate New License',
        },
        table: {
            details: 'License Details',
            type: 'Type',
            allocation: 'Allocation',
            expiry: 'Valid Until',
            status: 'Status',
            actions: 'Actions'
        },
        status: {
            active: 'Active',
            expired: 'Expired',
            expiring: 'Expiring Soon'
        }
      }
    },
    inspector: {
      title: 'Configuration',
      id: 'Node ID',
      label: 'Label',
      description: 'Description',
      parameters: 'Parameters',
      activeState: 'Active State',
      delete: 'Delete',
      close: 'Close',
      confThreshold: 'Confidence Threshold',
      iouThreshold: 'IOU Threshold',
      resolution: 'Resolution',
      fps: 'FPS'
    },
    nodes: {
      input: { label: 'Video Source', desc: 'Camera, RTSP, File' },
      detection: { label: 'Object Detection', desc: 'YOLO, SSD, FasterRCNN' },
      tracking: { label: 'Object Tracking', desc: 'ByteTrack, DeepSort' },
      pose: { label: 'Pose Estimation', desc: 'MoveNet, PoseNet' },
      classifier: { label: 'Classification', desc: 'ResNet, MobileNet' },
      logic: { label: 'Logic Gate', desc: 'Filter, Switch, Merge' },
      output: { label: 'Output Sink', desc: 'DB, API, File' }
    },
    status: {
      idle: 'IDLE',
      running: 'RUNNING',
      completed: 'COMPLETED',
      error: 'ERROR'
    },
    modelLibrary: {
      title: 'Add a Model',
      tabs: {
        types: 'Model Types',
        custom: 'My Models',
        public: 'Public Models'
      },
      searchPlaceholder: 'Search model blocks...',
      addModel: 'Add Model',
      cancel: 'Cancel',
      popular: 'Popular'
    },
    history: {
      title: 'Version History',
      versionsAvailable: 'versions available',
      restore: 'Restore',
      types: {
        current: 'Current Version',
        save: 'Saved Manually',
        init: 'Project Created'
      },
      time: {
        justNow: 'Just now',
        hoursAgo: '2 hours ago',
        yesterday: 'Yesterday',
        daysAgo: '3 days ago'
      }
    },
    workspace: {
      title: 'Vision Team',
      personal: 'Personal Workspace',
      team: 'Team Plan',
      addTeam: 'Create Workspace',
      settings: 'Workspace Settings',
      logout: 'Log Out',
      members: 'Members',
      plan: 'Free Plan',
      searchPlaceholder: 'Search workspaces...',
      listTitle: 'Workspaces'
    }
};
