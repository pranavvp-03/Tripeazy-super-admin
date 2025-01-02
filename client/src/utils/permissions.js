const hasPermission = (tab, action) => {
    if (!permissions || permissions.length === 0) {
      return false; // No permissions, restrict access
    }
    return permissions.find(
      (permission) => permission.tab === tab && permission[action]
    );
  };
  