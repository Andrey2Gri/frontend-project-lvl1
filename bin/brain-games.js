#!/usr/bin/env node
import { askName, toGreet } from '../src/index.js';
const name = askName();
toGreet(name);
