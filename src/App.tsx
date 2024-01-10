import MyAccountTemplate from 'authenticated_pages/accounts/MyAccountTemplate';
import MyAccountsIndexPage from 'authenticated_pages/accounts/MyAccountsIndexPage';
import MyAccountsPage from 'authenticated_pages/accounts/my_accounts/MyAccountsPage';

import DepositIndexPage from 'authenticated_pages/deposits/DepositIndexPage';
import MyDepositsTemplate from 'authenticated_pages/deposits/MyDepositsTemplate';
import DepositLaterPage from 'authenticated_pages/deposits/deposit_later/DepositLaterPage';
import DepositNowPage from 'authenticated_pages/deposits/deposit_now/DepositNowPage';
import DepositRequestStatusPage from 'authenticated_pages/deposits/deposit_request_status/DepositRequestStatusPage';
import DepositThroughBankPage from 'authenticated_pages/deposits/deposit_through_bank/DepositThroughBankPage';
import ThroughBkash from 'authenticated_pages/deposits/deposit_through_bkash/ThroughBkash';
import EReceiptPage from 'authenticated_pages/deposits/e_receipt/EReceiptPage';
import MyInfoIndexPage from 'authenticated_pages/info/MyInfoIndexPage';
import MyInfoTemplate from 'authenticated_pages/info/MyInfoTemplate';
import BeneficiaryPage from 'authenticated_pages/info/beneficiary/BeneficiaryPage';
import DependentsAccountPage from 'authenticated_pages/info/dependents_account/DependentsAccountPage';
import FamilyAndRelativesPage from 'authenticated_pages/info/family_and_relatives/FamilyAndRelativesPage';
import CardPage from 'authenticated_pages/info/financial_card/CardPage';
import MyInfoPage from 'authenticated_pages/info/me/MyInfoPage';
import MyLoanTemplate from 'authenticated_pages/loans/MyLoanTemplate';
import MyLoansIndexPage from 'authenticated_pages/loans/MyLoansIndexPage';
import ApplyLoans from 'authenticated_pages/loans/apply_loans/ApplyLoans';
import ProductLoansPage from 'authenticated_pages/loans/apply_loans/product_loan/ProductLoansPage';
import MyLoansPage from 'authenticated_pages/loans/my_loans/MyLoansPage';
import SuretyTaken from 'authenticated_pages/loans/my_loans/components/SuretyTaken';
import PaymentIndexPage from 'authenticated_pages/payment/PaymentIndexPage';
import PaymentTemplate from 'authenticated_pages/payment/PaymentTemplate';
import DcPayment from 'authenticated_pages/payment/dc_payment/DcPayment';
import ChangePasswordInfoPage from 'authenticated_pages/privacy/ChangePasswordInfoPage';
import PrivacyTemplate from 'authenticated_pages/privacy/PrivacyTemplate';
import ChangePassword from 'authenticated_pages/privacy/change_password/ChangePassword';
import PinResetPage from 'authenticated_pages/privacy/pin_reset/PinResetPage';
import ProfessionalsIndexPage from 'authenticated_pages/professionals/ProfessionalsIndexPage';
import ProfessionalsTemplate from 'authenticated_pages/professionals/ProfessionalsTemplate';
import AttendancePage from 'authenticated_pages/professionals/attendance/AttendancePage';
import FallbackApprovalPage from 'authenticated_pages/professionals/fallback_approval/FallbackApprovalPage';
import LeaveApplicationPage from 'authenticated_pages/professionals/leave_application/LeaveApplicationPage';
import LeaveHistoriesPage from 'authenticated_pages/professionals/leave_histories/LeaveHistoriesPage';
import WorkingOutOfOfficePage from 'authenticated_pages/professionals/working_out_of_office/WorkingOutOfOfficePage';
import WorkingOutOfOfficeHistoriesPage from 'authenticated_pages/professionals/working_out_of_office_histories/WorkingOutOfOfficeHistoriesPage';
import MyRecruitmentIndexPage from 'authenticated_pages/recruitment/MyRecruitmentIndexPage';
import MyRecruitmentTemplate from 'authenticated_pages/recruitment/MyRecruitmentTemplate';
import RecruitmentJobApplicationPage from 'authenticated_pages/recruitment/RecruitmentJobApplicationPage';
import RecruitmentJobCircularsPage from 'authenticated_pages/recruitment/RecruitmentJobCircularsPage';
import SuretyIndexPage from 'authenticated_pages/surety/SuretyIndexPage';
import SuretyTemplate from 'authenticated_pages/surety/SuretyTemplate';
import SuretyGivenPage from 'authenticated_pages/surety/surety_given/SuretyGivenPage';
import SuretyRequestInfoPage from 'authenticated_pages/surety/surety_requests/SuretyRequestInfoPage';
import MyTransferTemplate from 'authenticated_pages/transfer/MyTransferTemplate';
import TransferIndexPage from 'authenticated_pages/transfer/TransferIndexPage';
import BankTransferRequest from 'authenticated_pages/transfer/bank_transfer_request/BankTransferRequest';
import BkashTransferRequest from 'authenticated_pages/transfer/bkash_transfer_request/BkashTransferRequest';
import TransferRequestStatus from 'authenticated_pages/transfer/transfer_request_status/TransferRequestStatus';
import TransferToOtherCooperatives from 'authenticated_pages/transfer/transfer_to_other_cooperatives/TransferToOtherCooperatives';
import TransferWithinDhakaCredit from 'authenticated_pages/transfer/transfer_within_dc/TransferWithinDhakaCredit';
import WithdrawIndexPage from 'authenticated_pages/withdraw/WithdrawIndexPage';
import WithdrawTemplate from 'authenticated_pages/withdraw/WithdrawTemplate';
import ThroughATMPage from 'authenticated_pages/withdraw/through_atm/ThroughATMPage';
import { AnimatePresence } from 'framer-motion';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import Banner from 'partials/Banner';
import FloatingCarrier from 'partials/FloatingCarrier';
import FloatingScrollUp from 'partials/FloatingScrollUp';
import FloatingTransaction from 'partials/FloatingTransaction';
import Footer from 'partials/Footer';
import Header from 'partials/Header';
import ErrorPage from 'public_pages/404/ErrorPage';
import AboutTemplate from 'public_pages/about/AboutTemplate';
import AboutUs from 'public_pages/about/about_us/AboutUs';
import Achievement from 'public_pages/about/achievements/Achievements';
import CoreValues from 'public_pages/about/core_values/CoreValues';
import CreditUnionMovement from 'public_pages/about/credit_union_movement/CreditUnionMovement';
import DcCalender from 'public_pages/about/dc_calender/DcCalender';
import FoundersProfile from 'public_pages/about/founders_profile/FoundersProfile';
import Gallery from 'public_pages/about/gallery/Gallery';
import MissionAndValues from 'public_pages/about/mission_and_values/MissionAndValues';
import OurStory from 'public_pages/about/our_story/OurStory';
import Publication from 'public_pages/about/publication/Publication';
import WomansActivity from 'public_pages/about/womans_activity/WomansActivity';
import BoardOfDirector from 'public_pages/board_members/board_of_director/BoardOfDirector';
import CreditCommittee from 'public_pages/board_members/credit_committee/CreditCommittee';
import OfficeBearerContent from 'public_pages/board_members/office_bearer/OfficeBearerContent';
import SupervisoryCommittee from 'public_pages/board_members/supervisory_committee/SupervisoryCommittee';
import JobApplication from 'public_pages/carrier/job_application/JobApplication';
import JobCircularDetails from 'public_pages/carrier/job_circular/JobCircularDetails';
import JobCirculars from 'public_pages/carrier/job_circular/JobCirculars';
import ContactMap from 'public_pages/contact/ContactMap';
import DepositProductsPage from 'public_pages/deposit_products/DepositProductsPage';
import AgedSavings from 'public_pages/deposit_products/deposit_details/AgedSavings';
import BeeSavers from 'public_pages/deposit_products/deposit_details/BeeSavers';
import Credit from 'public_pages/deposit_products/deposit_details/Credit';
import DCHealthCareScheme from 'public_pages/deposit_products/deposit_details/DCHealthCareScheme';
import DoubleDeposit from 'public_pages/deposit_products/deposit_details/DoubleDeposit';
import EducationSavings from 'public_pages/deposit_products/deposit_details/EducationSavings';
import FestivalSavings from 'public_pages/deposit_products/deposit_details/FestivalSavings';
import HospitalBond from 'public_pages/deposit_products/deposit_details/HospitalBond';
import HousingDeposit from 'public_pages/deposit_products/deposit_details/HousingDeposit';
import KotiPotiDeposit from 'public_pages/deposit_products/deposit_details/KotiPotiDeposit';
import Ltsd from 'public_pages/deposit_products/deposit_details/Ltsd';
import MarriageDeposit from 'public_pages/deposit_products/deposit_details/MarriageDeposit';
import MillionaireDeposit from 'public_pages/deposit_products/deposit_details/MillionaireDeposit';
import MonthlySavings from 'public_pages/deposit_products/deposit_details/MonthlySavings';
import PensionBenefitScheme from 'public_pages/deposit_products/deposit_details/PensionBenefitScheme';
import STD from 'public_pages/deposit_products/deposit_details/STD';
import Savings from 'public_pages/deposit_products/deposit_details/Savings';
import SmartSavers from 'public_pages/deposit_products/deposit_details/SmartSavers';
import TroimashikSavings from 'public_pages/deposit_products/deposit_details/TroimashikSavings';
import FrequentlyAskedQuestions from 'public_pages/faq/FrequentlyAskedQuestions';
import Home from 'public_pages/home/Home';
import LoanProducts from 'public_pages/loan_products/LoanProducts';
import BillPayLoan from 'public_pages/loan_products/components/BillPayLoan';
import BusinessLoan from 'public_pages/loan_products/components/BusinessLoan';
import CapacityBasedLoan from 'public_pages/loan_products/components/CapacityBasedLoan';
import CarLoan from 'public_pages/loan_products/components/CarLoan';
import CompetencyBaseLoan from 'public_pages/loan_products/components/CompetencyBaseLoan';
import ConsumerLoan from 'public_pages/loan_products/components/ConsumerLoan';
import CreditCellingLoan from 'public_pages/loan_products/components/CreditCellingLoan';
import DcFlatPurchaseLoan from 'public_pages/loan_products/components/DcFlatPurchaseLoan';
import DcGymLoan from 'public_pages/loan_products/components/DcGymLoan';
import DoubleLoanOnFixedDeposit from 'public_pages/loan_products/components/DoubleLoanOnFixedDeposit';
import EmergencyLoan from 'public_pages/loan_products/components/EmergencyLoan';
import EntrepreneurLoan from 'public_pages/loan_products/components/EntrepreneurLoan';
import FlatPurchaseLoan from 'public_pages/loan_products/components/FlatPurchaseLoan';
import GeneralCCLoan from 'public_pages/loan_products/components/GeneralCCLoan';
import GeneralLoan from 'public_pages/loan_products/components/GeneralLoan';
import GoingAbroadLoan from 'public_pages/loan_products/components/GoingAbroadLoan';
import HigherEducationLoan from 'public_pages/loan_products/components/HigherEducationLoan';
import HigherEducationSupportLoan from 'public_pages/loan_products/components/HigherEducationSupportLoan';
import HouseBuildingLoan from 'public_pages/loan_products/components/HouseBuildingLoan';
import IndustrialLoan from 'public_pages/loan_products/components/IndustrialLoan';
import InstantLoan from 'public_pages/loan_products/components/InstantLoan';
import LoanAgainstLtsd from 'public_pages/loan_products/components/LoanAgainstLtsd';
import MetroHouseBuildingLoan from 'public_pages/loan_products/components/MetroHouseBuildingLoan';
import OpenInstallmentLoan from 'public_pages/loan_products/components/OpenInstallmentLoan';
import OwnShareLoan from 'public_pages/loan_products/components/OwnShareLoan';
import ProfessionalTrainingLoan from 'public_pages/loan_products/components/ProfessionalTrainingLoan';
import SecureOverDraftLoan from 'public_pages/loan_products/components/SecureOverDraftLoan';
import SmbLoan from 'public_pages/loan_products/components/SmbLoan';
import SolvencyHigherEducationLoan from 'public_pages/loan_products/components/SolvencyHigherEducationLoan';
import TopUpLoan from 'public_pages/loan_products/components/TopUpLoan';
import VariousOtherLoan from 'public_pages/loan_products/components/VariousOtherLoan';
import Notice from 'public_pages/notices/Notice';
import Projects from 'public_pages/our_projects/Projects';
import BeautyParlour from 'public_pages/our_projects/components/BeautyParlour';
import ChildCare from 'public_pages/our_projects/components/ChildCare';
import Hostel from 'public_pages/our_projects/components/Hostel';
import School from 'public_pages/our_projects/components/School';
import Services from 'public_pages/our_services/Service';
import AmbulanceService from 'public_pages/our_services/components/AmbulanceService';
import AtmService from 'public_pages/our_services/components/AtmService';
import PresidentMessage from 'public_pages/president_message/PresidentMessage';

import CulturalAcademy from 'public_pages/our_projects/components/CulturalAcademy';
import GymService from 'public_pages/our_projects/components/GymService';
import SecurityService from 'public_pages/our_projects/components/SecurityService';
import DcMMS from 'public_pages/our_services/components/DcMMS';
import DcNewsService from 'public_pages/our_services/components/DcNewsService';
import DcOnlineTvService from 'public_pages/our_services/components/DcOnlineTvService';
import DoctorsChamberService from 'public_pages/our_services/components/DoctorsChamberService';
import OtherServices from 'public_pages/our_services/components/OtherServices';
import SamabayBazar from 'public_pages/our_services/components/SamabayBazar';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonDependentsAccountPage from 'authenticated_pages/info/dependents_account/PersonDependentsAccountPage';
import FixedDeposit from 'authenticated_pages/accounts/open_an_account/fixed_deposit/FixedDeposit';
import InsuranceDeposit from 'authenticated_pages/accounts/open_an_account/insurance_deposit/InsuranceDeposit';
import SchemeDeposit from 'authenticated_pages/accounts/open_an_account/scheme_deposit/SchemeDeposit';
import OpenAccountsPage from 'authenticated_pages/accounts/open_an_account/OpenAccountsPage';
import TodaysPunch from 'authenticated_pages/professionals/todaysPunch/TodaysPunch';

function App() {
  const [scrollFromTop, setScrollFromTop] = useState(false);
  const location = useLocation();
  const { authUser, IsMenuExist } = useAuthUserAndMenu();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setScrollFromTop(true) : setScrollFromTop(false);
    });
  }, [authUser]);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col bg-background font-sans-serif ">
        <Header scroll={scrollFromTop} />
        <Banner />

        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route index element={<Home />} />
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="atm-service" element={<AtmService />} />
              <Route path="samabay-bazar" element={<SamabayBazar />} />
              <Route path="security-service" element={<SecurityService />} />
              <Route
                path="doctors-chamber-service"
                element={<DoctorsChamberService />}
              />
              <Route path="ambulance-service" element={<AmbulanceService />} />
              <Route path="dc-tv" element={<DcOnlineTvService />} />

              <Route path="dc-news" element={<DcNewsService />} />
              <Route path="mms" element={<DcMMS />} />
              <Route path="other-services" element={<OtherServices />} />
            </Route>
            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path="child-care" element={<ChildCare />} />
              <Route path="dc-hostel" element={<Hostel />} />
              <Route path="dc-school" element={<School />} />
              <Route path="beauty-parlor" element={<BeautyParlour />} />
              <Route path="cultural-academy" element={<CulturalAcademy />} />
              <Route path="gym" element={<GymService />} />
            </Route>
            <Route path="president-message" element={<PresidentMessage />} />
            <Route path="loan-products">
              <Route index element={<LoanProducts />} />
              <Route path="business-loan" element={<BusinessLoan />} />
              <Route path="loan-against-ltsd" element={<LoanAgainstLtsd />} />
              <Route path="general-Loan" element={<GeneralLoan />} />
              <Route path="smd-loan" element={<SmbLoan />} />
              <Route path="car-loan" element={<CarLoan />} />
              <Route
                path="competency-based-loan"
                element={<CompetencyBaseLoan />}
              />
              <Route
                path="metro-house-building-loan"
                element={<MetroHouseBuildingLoan />}
              />
              <Route path="flat-purchase-loan" element={<FlatPurchaseLoan />} />
              <Route
                path="house-building-loan"
                element={<HouseBuildingLoan />}
              />
              <Route
                path="credit-ceiling-loan"
                element={<CreditCellingLoan />}
              />
              <Route path="industrial-loan" element={<IndustrialLoan />} />
              <Route path="general-cc-loan" element={<GeneralCCLoan />} />
              <Route path="going-abroad-loan" element={<GoingAbroadLoan />} />
              <Route
                path="solvency-higher-edu"
                element={<SolvencyHigherEducationLoan />}
              />
              <Route path="top-up-loan" element={<TopUpLoan />} />
              <Route path="bill-pay-loan" element={<BillPayLoan />} />
              <Route
                path="higher-education-loan"
                element={<HigherEducationLoan />}
              />
              <Route
                path="higher-education-support-loan"
                element={<HigherEducationSupportLoan />}
              />
              <Route
                path="professional-training-loan"
                element={<ProfessionalTrainingLoan />}
              />
              <Route path="consumer-loan" element={<ConsumerLoan />} />
              <Route path="gym-loan" element={<DcGymLoan />} />
              <Route
                path="open-installment-loan"
                element={<OpenInstallmentLoan />}
              />
              <Route path="own-share-loan" element={<OwnShareLoan />} />
              <Route
                path="secured-over-draft-loan"
                element={<SecureOverDraftLoan />}
              />

              <Route
                path="dc-flat-purchase-loan"
                element={<DcFlatPurchaseLoan />}
              />
              <Route path="emergency-loan" element={<EmergencyLoan />} />
              <Route path="instant-loan" element={<InstantLoan />} />
              <Route path="entrepreneur-loan" element={<EntrepreneurLoan />} />
              <Route
                path="double-loan-on-fixed-deposit"
                element={<DoubleLoanOnFixedDeposit />}
              />
              <Route
                path="capacity-based-loan"
                element={<CapacityBasedLoan />}
              />
              <Route
                path="various-other-loans"
                element={<VariousOtherLoan />}
              />
            </Route>
            <Route path="deposit-products">
              <Route index element={<DepositProductsPage />} />
              <Route path="savings-account" element={<Savings />} />
              <Route path="share-account" element={<Credit />} />
              <Route path="std-account" element={<STD />} />
              <Route path="bee-savers-account" element={<BeeSavers />} />
              <Route path="smart-savers-account" element={<SmartSavers />} />
              <Route path="ltsd-account" element={<Ltsd />} />
              <Route path="aged-savings-account" element={<AgedSavings />} />
              <Route
                path="pension-benefit-account"
                element={<PensionBenefitScheme />}
              />
              <Route
                path="health-care-account"
                element={<DCHealthCareScheme />}
              />
              <Route path="hospital-bond-account" element={<HospitalBond />} />
              <Route
                path="kotipoti-deposit-account"
                element={<KotiPotiDeposit />}
              />
              <Route
                path="marriage-deposit-account"
                element={<MarriageDeposit />}
              />
              <Route
                path="housing-deposit-account"
                element={<HousingDeposit />}
              />
              <Route
                path="millionaire-deposit-account"
                element={<MillionaireDeposit />}
              />
              <Route
                path="double-deposit-account"
                element={<DoubleDeposit />}
              />
              <Route
                path="troimashik-savings-account"
                element={<TroimashikSavings />}
              />
              <Route
                path="festival-savings-account"
                element={<FestivalSavings />}
              />
              <Route
                path="monthly-savings-account"
                element={<MonthlySavings />}
              />
              <Route
                path="education-savings-account"
                element={<EducationSavings />}
              />
            </Route>
            <Route path="job-circulars">
              <Route index element={<JobCirculars />} />
              <Route path=":title/:id" element={<JobCircularDetails />} />
              <Route path="job-application" element={<JobApplication />} />
            </Route>
            <Route path="about" element={<AboutTemplate />}>
              <Route index element={<AboutUs />} />
              <Route path="founders-profile" element={<FoundersProfile />} />
              <Route path="our-story" element={<OurStory />} />
              <Route path="mission-vision" element={<MissionAndValues />} />
              <Route path="core-values" element={<CoreValues />} />

              <Route path="cu-movement" element={<CreditUnionMovement />} />
              <Route path="achievement" element={<Achievement />} />
              <Route path="women-activity" element={<WomansActivity />} />
              <Route path="dc-calender" element={<DcCalender />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="publication" element={<Publication />} />
            </Route>
            <Route path="notice" element={<Notice />} />
            <Route path="faq" element={<FrequentlyAskedQuestions />} />
            <Route path="contact" element={<ContactMap />} />
            <Route path="management">
              <Route path="office_bearers" element={<OfficeBearerContent />} />
              <Route path="board_of_directors" element={<BoardOfDirector />} />
              <Route path="credit_committee" element={<CreditCommittee />} />
              <Route
                path="supervisory_committee"
                element={<SupervisoryCommittee />}
              />
            </Route>

            <Route path="info" element={<MyInfoTemplate />}>
              <Route index element={<MyInfoIndexPage />} />
              <Route path="my_info" element={<MyInfoPage />} />
              <Route
                path="family_and_relatives"
                element={<FamilyAndRelativesPage />}
              />
              <Route
                path="dependents_account"
                element={<DependentsAccountPage />}
              />
              <Route
                path="dependents_account/:id"
                element={<PersonDependentsAccountPage />}
              />
              <Route path="card" element={<CardPage />} />
              <Route
                path="beneficiary_Management"
                element={<BeneficiaryPage />}
              />
            </Route>

            {authUser != null ? (
              IsMenuExist('My Accounts') ? (
                <Route path="accounts" element={<MyAccountTemplate />}>
                  <Route path="my_accounts" element={<MyAccountsPage />} />

                  <Route index element={<MyAccountsIndexPage />} />
                  <Route
                    path="open_an_account"
                    element={<OpenAccountsPage />}
                  />
                  <Route
                    path="open_an_account/Terms Deposit/:accountType"
                    element={<FixedDeposit />}
                  />
                  <Route
                    path="open_an_account/Scheme Deposit/:accountType"
                    element={<SchemeDeposit />}
                  />
                  <Route
                    path="open_an_account/Bond & Insurance/:accountType"
                    element={<InsuranceDeposit />}
                  />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Loans') ? (
                <Route path="/loans" element={<MyLoanTemplate />}>
                  <Route index element={<MyLoansIndexPage />} />
                  <Route path="my_loans" element={<MyLoansPage />} />
                  <Route path="apply_for_loan" element={<ApplyLoans />} />
                  <Route path="deposit_loan" element={<ProductLoansPage />} />
                  <Route path="loan_surety/:id" element={<SuretyTaken />} />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Surety Status') ? (
                <Route path="surety" element={<SuretyTemplate />}>
                  <Route index element={<SuretyIndexPage />} />
                  <Route path="surety_given" element={<SuretyGivenPage />} />
                  <Route
                    path="surety_requests"
                    element={<SuretyRequestInfoPage />}
                  />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Withdraw') ? (
                <Route path="Withdraw" element={<WithdrawTemplate />}>
                  <Route index element={<WithdrawIndexPage />} />
                  <Route path="through_atm" element={<ThroughATMPage />} />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Transfer') ? (
                <Route path="transfer" element={<MyTransferTemplate />}>
                  <Route index element={<TransferIndexPage />} />
                  <Route
                    path="transfer_within_dhaka_credit"
                    element={<TransferWithinDhakaCredit />}
                  />

                  <Route
                    path="transfer_To_Other_Cooperatives"
                    element={<TransferToOtherCooperatives />}
                  />
                  <Route
                    path="bank_Transfer_Request"
                    element={<BankTransferRequest />}
                  />
                  <Route
                    path="bKash_Transfer_Request"
                    element={<BkashTransferRequest />}
                  />
                  <Route
                    path="transfer_Request_Status"
                    element={<TransferRequestStatus />}
                  />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('payment') ? (
                <Route path="payment" element={<PaymentTemplate />}>
                  <Route index element={<PaymentIndexPage />} />
                  <Route path="dc_payment" element={<DcPayment />} />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Job Portal Administration') ? (
                <Route path="recruitment" element={<MyRecruitmentTemplate />}>
                  <Route index element={<MyRecruitmentIndexPage />} />

                  <Route
                    path="JobCirculars"
                    element={<RecruitmentJobCircularsPage />}
                  />
                  <Route
                    path="jobApplication/:id"
                    element={<RecruitmentJobApplicationPage />}
                  />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Deposit') ? (
                <Route path="deposits" element={<MyDepositsTemplate />}>
                  <Route index element={<DepositIndexPage />} />
                  <Route path="deposit_now" element={<DepositNowPage />} />
                  <Route
                    path="deposit_request_status"
                    element={<DepositRequestStatusPage />}
                  />
                  <Route path="e_receipt" element={<EReceiptPage />} />
                  <Route path="deposit_later" element={<DepositLaterPage />} />
                  <Route
                    path="deposit_bank"
                    element={<DepositThroughBankPage />}
                  />
                  <Route path="through_bkash" element={<ThroughBkash />} />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Personnel') ? (
                <Route path="personnel" element={<ProfessionalsTemplate />}>
                  <Route index element={<ProfessionalsIndexPage />} />
                  <Route
                    path="leave_application"
                    element={<LeaveApplicationPage />}
                  />
                  <Route
                    path="fallback_requests"
                    element={<FallbackApprovalPage />}
                  />
                  <Route
                    path="leave_histories"
                    element={<LeaveHistoriesPage />}
                  />
                  <Route path="attendances" element={<AttendancePage />} />
                  <Route
                    path="wooo_application"
                    element={<WorkingOutOfOfficePage />}
                  />
                  <Route
                    path="wooo_histories"
                    element={<WorkingOutOfOfficeHistoriesPage />}
                  />
                  <Route path="todays_punch" element={<TodaysPunch />} />
                </Route>
              ) : null
            ) : null}

            {authUser != null ? (
              IsMenuExist('Privacy') ? (
                <Route path="privacy" element={<PrivacyTemplate />}>
                  <Route index element={<ChangePasswordInfoPage />} />
                  <Route path="change_Password" element={<ChangePassword />} />
                  <Route path="pin_reset" element={<PinResetPage />} />
                </Route>
              ) : null
            ) : null}

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        <FloatingCarrier />
        <ToastContainer />
        {authUser && <FloatingTransaction />}

        {scrollFromTop && <FloatingScrollUp onClick={handleScrollUp} />}
      </div>
    </div>
  );
}

export default App;
