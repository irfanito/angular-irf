import './test/jasmine.ts'
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
import './polyfills';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import './test/specs/spec-calcul-service.ts'
import './test/specs/spec-utilisateur-service.ts'

jasmine.getEnv().configure({random: false});
bootstrap();

function bootstrap () {
  if (window.jasmineRef) {
    location.reload();
    return;
  } else {
    window.onload();
    window.jasmineRef = jasmine.getEnv();
  }

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}