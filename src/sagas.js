import { fork } from 'redux-saga/effects'
import * as appSagas from './components/common/sagas/appSagas'

export default function* rootSaga () {
    yield [
        fork(appSagas.fetchConfigSaga),
        fork(appSagas.diffSaga),
    ]
}
