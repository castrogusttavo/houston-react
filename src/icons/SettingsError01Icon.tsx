import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SettingsError01Icon({
  iconName = 'settings-error-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
