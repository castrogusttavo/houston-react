import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmsCodeIconIcon({ iconName = 'sms-code-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
