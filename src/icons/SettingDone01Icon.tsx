import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SettingDone01Icon({
  iconName = 'setting-done-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
