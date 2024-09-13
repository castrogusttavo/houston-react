import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailOpen01Icon({
  iconName = 'mail-open-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
