import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Contact01Icon({
  iconName = 'contact-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
