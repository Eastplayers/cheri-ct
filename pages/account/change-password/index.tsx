import AccountEditInfo from '../../../components/AccountEditInfo/AccountEditInfo';
import ColumnLayout from '../../../components/ColumnLayout/ColumnLayout';
import AccountAddress from '../../../components/AccountAddress/Login/AccountAddress';
import AccountAddressNotLogin from '../../../components/AccountAddress/NotLogin/AccountAddressNotLogin';
import AccountChangePassword from '../../../components/AccountChangePassword/AccountChangePassword';

const ChangePassword = () => {

  return (
    <section id="account-edit-info">
      <ColumnLayout>
        <AccountChangePassword/>
      </ColumnLayout>
    </section>
  );
};

export default ChangePassword;
