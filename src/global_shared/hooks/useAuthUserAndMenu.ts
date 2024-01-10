import { IMenu } from 'authentication/login/model/data/IAuthUserModel';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { useContext } from 'react';

function useAuthUserAndMenu() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const IsMenuExist = (menuTitle: string | null) => {
    var found = false;
    authUser?.WebPortalMenuList?.forEach((element) => {
      const myMenusType = element?.MenuName?.toLowerCase()?.trim();
      if (myMenusType === menuTitle?.toLowerCase()?.trim()) {
        found = true;
      }
    });
    return found;
  };

  const GetMenu = (menuTitle: string): IMenu | null => {
    var found = null;
    authUser?.WebPortalMenuList?.forEach((element) => {
      const myMenusType = element?.MenuName?.toLowerCase()?.trim();
      if (myMenusType === menuTitle?.toLowerCase()?.trim()) {
        found = element;
      }
    });
    return found;
  };

  return {
    authUser,
    IsMenuExist,
    GetMenu,
  };
}

export default useAuthUserAndMenu;
