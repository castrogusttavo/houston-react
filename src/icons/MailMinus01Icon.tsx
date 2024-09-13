import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailMinus01Icon({
  iconName = 'mail-minus-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
