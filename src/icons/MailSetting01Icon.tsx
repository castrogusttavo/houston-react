import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailSetting01Icon({
  iconName = 'mail-setting-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
