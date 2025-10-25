    // src/AdminNavBar.js
    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function AdminNavBar({ onCollapse, activePage = 'dashboard' }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState(null);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        const newCollapsedState = !isCollapsed;
        setIsCollapsed(newCollapsedState);
        if (newCollapsedState) {
        setExpandedMenu(null);
        }
        if (onCollapse) {
        onCollapse(newCollapsedState);
        }
    };

    const toggleMenu = (menuName) => {
        if (isCollapsed) return;
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };

    const isActive = (pageName) => activePage === pageName;

    const styles = {
        navbar: {
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #dee2e6',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        width: isCollapsed ? '72px' : '250px',
        zIndex: 1000,
        overflow: 'hidden'
        },
        header: {
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'flex-end',
        minHeight: '56px',
        position: 'relative'
        },
        collapseButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        color: '#495057',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        transition: 'all 0.25s ease',
        position: isCollapsed ? 'static' : 'absolute',
        right: isCollapsed ? 'auto' : '16px',
        top: isCollapsed ? 'auto' : '50%',
        transform: isCollapsed ? 'none' : 'translateY(-50%)'
        },
        profile: {
        padding: '0px 16px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #dee2e6',
        transition: 'opacity 0.3s ease'
        },
        profileAvatar: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#d4e7d7',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        },
        profileName: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#495057'
        },
        nav: {
        flex: 1,
        padding: '4px 0',
        overflowY: 'auto',
        overflowX: 'hidden'
        },
        navItem: {
        marginBottom: '4px'
        },
        navLink: (active) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        background: active ? '#388e3c' : 'none',
        border: 'none',
        width: '100%',
        cursor: 'pointer',
        color: active ? '#ffffff' : '#495057',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        textAlign: 'left',
        position: 'relative',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        borderRadius: active ? '8px' : '0px',
        margin: active ? '0 8px' : '0',
        width: active ? 'calc(100% - 16px)' : '100%'
        }),
        navIcon: (active) => ({
        width: '24px',
        height: '24px',
        color: active ? '#ffffff' : '#388e3c',
        flexShrink: 0,
        transition: 'color 0.25s ease'
        }),
        navText: (active) => ({
        marginLeft: '12px',
        fontSize: '14px',
        fontWeight: active ? '600' : '500',
        flex: 1,
        whiteSpace: 'nowrap',
        transition: 'all 0.25s ease'
        }),
        dropdownIcon: (active) => ({
        width: '16px',
        height: '16px',
        color: active ? '#ffffff' : '#6c757d',
        marginLeft: 'auto',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s ease'
        }),
        submenu: {
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease',
        maxHeight: '0',
        opacity: 0
        },
        submenuExpanded: {
        maxHeight: '500px',
        opacity: 1
        },
        submenuItem: {
        padding: '10px 16px 10px 52px',
        background: 'none',
        border: 'none',
        width: '100%',
        cursor: 'pointer',
        color: '#6c757d',
        fontSize: '14px',
        textAlign: 'left',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'block',
        borderRadius: '6px'
        },
        navBottom: {
        padding: '4px 0 8px',
        borderTop: '1px solid #dee2e6'
        }
    };

    const handleMouseEnter = (e, active) => {
        if (!active) {
        e.currentTarget.style.backgroundColor = '#e9ecef';
        e.currentTarget.style.borderRadius = '8px';
        e.currentTarget.style.margin = '0 8px';
        e.currentTarget.style.width = 'calc(100% - 16px)';
        }
    };

    const handleMouseLeave = (e, active) => {
        if (!active) {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderRadius = '0px';
        e.currentTarget.style.margin = '0';
        e.currentTarget.style.width = '100%';
        }
    };

    const handleSubmenuHover = (e, isEnter) => {
        e.currentTarget.style.backgroundColor = isEnter ? '#f1f3f5' : 'transparent';
        e.currentTarget.style.color = isEnter ? '#388e3c' : '#6c757d';
        e.currentTarget.style.fontWeight = isEnter ? '600' : '400';
        e.currentTarget.style.paddingLeft = isEnter ? '56px' : '52px';
    };

    const handleToggleHover = (e, isEnter) => {
        e.currentTarget.style.backgroundColor = isEnter ? '#e9ecef' : 'transparent';
    };

    return (
        <div style={styles.navbar}>
        {/* Header Section */}
        <div style={styles.header}>
            <button 
            style={styles.collapseButton}
            onClick={toggleSidebar}
            onMouseEnter={(e) => handleToggleHover(e, true)}
            onMouseLeave={(e) => handleToggleHover(e, false)}
            title={isCollapsed ? "Expand" : "Collapse"}
            >
            {isCollapsed ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )}
            </button>
        </div>

        {/* Profile Section */}
        {!isCollapsed && (
            <div style={styles.profile}>
            <div style={styles.profileAvatar}></div>
            <div style={styles.profileName}>Admin</div>
            </div>
        )}

        {/* Navigation Items */}
        <nav style={styles.nav}>
            {/* Dashboard */}
            <div style={styles.navItem}>
            <button 
                style={styles.navLink(isActive('dashboard'))}
                onMouseEnter={(e) => handleMouseEnter(e, isActive('dashboard'))}
                onMouseLeave={(e) => handleMouseLeave(e, isActive('dashboard'))}
            >
                <svg style={styles.navIcon(isActive('dashboard'))} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" fill="currentColor"/>
                <rect x="13" y="3" width="8" height="8" fill="currentColor"/>
                <rect x="3" y="13" width="8" height="8" fill="currentColor"/>
                <rect x="13" y="13" width="8" height="8" fill="currentColor"/>
                </svg>
                {!isCollapsed && <span style={styles.navText(isActive('dashboard'))}>Dashboard</span>}
            </button>
            </div>

            {/* Calendar */}
            <div style={styles.navItem}>
            <button 
                style={styles.navLink(isActive('calendar'))}
                onClick={() => toggleMenu('calendar')}
                onMouseEnter={(e) => handleMouseEnter(e, isActive('calendar'))}
                onMouseLeave={(e) => handleMouseLeave(e, isActive('calendar'))}
            >
                <svg style={styles.navIcon(isActive('calendar'))} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {!isCollapsed && <span style={styles.navText(isActive('calendar'))}>Calendar</span>}
            </button>
            </div>

            {/* Events */}
            <div style={styles.navItem}>
            <button 
                style={styles.navLink(isActive('events'))}
                onClick={() => toggleMenu('events')}
                onMouseEnter={(e) => handleMouseEnter(e, isActive('events'))}
                onMouseLeave={(e) => handleMouseLeave(e, isActive('events'))}
            >
                <svg style={styles.navIcon(isActive('events'))} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="4" cy="6" r="1.5" fill="currentColor"/>
                <circle cx="4" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="4" cy="18" r="1.5" fill="currentColor"/>
                </svg>
                {!isCollapsed && (
                <>
                    <span style={styles.navText(isActive('events'))}>Events</span>
                    <svg 
                    style={{
                        ...styles.dropdownIcon(isActive('events')),
                        transform: expandedMenu === 'events' ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16"
                    >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                </>
                )}
            </button>
            {!isCollapsed && (
                <div style={{
                ...styles.submenu,
                ...(expandedMenu === 'events' ? styles.submenuExpanded : {})
                }}>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Create Event
                </button>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Pending Approval
                </button>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Event Calendar
                </button>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Event History
                </button>
                </div>
            )}
            </div>

            {/* Users */}
            <div style={styles.navItem}>
            <button 
                style={styles.navLink(isActive('users'))}
                onClick={() => toggleMenu('users')}
                onMouseEnter={(e) => handleMouseEnter(e, isActive('users'))}
                onMouseLeave={(e) => handleMouseLeave(e, isActive('users'))}
            >
                <svg style={styles.navIcon(isActive('users'))} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                {!isCollapsed && (
                <>
                    <span style={styles.navText(isActive('users'))}>Users</span>
                    <svg 
                    style={{
                        ...styles.dropdownIcon(isActive('users')),
                        transform: expandedMenu === 'users' ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16"
                    >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                </>
                )}
            </button>
            {!isCollapsed && (
                <div style={{
                ...styles.submenu,
                ...(expandedMenu === 'users' ? styles.submenuExpanded : {})
                }}>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Manage All Users
                </button>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Admins
                </button>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Staffs/Faculty
                </button>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Students
                </button>
                <button 
                    style={styles.submenuItem}
                    onMouseEnter={(e) => handleSubmenuHover(e, true)}
                    onMouseLeave={(e) => handleSubmenuHover(e, false)}
                >
                    Deleted Users
                </button>
                </div>
            )}
            </div>
        </nav>

        {/* Bottom Section */}
        <div style={styles.navBottom}>
            {/* Analytics */}
            <button 
            style={styles.navLink(isActive('analytics'))}
            onMouseEnter={(e) => handleMouseEnter(e, isActive('analytics'))}
            onMouseLeave={(e) => handleMouseLeave(e, isActive('analytics'))}
            >
            <svg style={styles.navIcon(isActive('analytics'))} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M7 16l4-6 3 3 5-8" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            {!isCollapsed && <span style={styles.navText(isActive('analytics'))}>Analytics</span>}
            </button>

            {/* Settings */}
            <button 
            style={styles.navLink(isActive('settings'))}
            onMouseEnter={(e) => handleMouseEnter(e, isActive('settings'))}
            onMouseLeave={(e) => handleMouseLeave(e, isActive('settings'))}
            >
            <svg style={styles.navIcon(isActive('settings'))} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {!isCollapsed && <span style={styles.navText(isActive('settings'))}>Settings</span>}
            </button>
        </div>
        </div>
    );
    }

    export default AdminNavBar;